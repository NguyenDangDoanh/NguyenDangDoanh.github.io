import { drinkDecks } from './drink-decks.js';
import { createDrinkSession } from './drink-session.js';
import { drinkThemes, drinkArt } from './drink-theme.js';
import { readGameState, saveGameState } from './storage.js';
import { resolveRoute } from './routes.js';

export function initDrinkGame() {
  const storageKey = 'that-hay-uong-coolist-v1';
  const savedState = readGameState(storageKey);
  const session = createDrinkSession({ savedState });
  const $ = selector => document.querySelector(selector);
  const app = $('#truth-drink-view');
  const buttons = new Map();
  const question = $('#drink-question');
  const reveal = $('#drink-reveal');
  const next = $('#drink-next');

  for (const category of drinkDecks) {
    const theme = drinkThemes[category.id];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `drink-category-tile category-${category.id}`;
    button.style.setProperty('--paper', theme.paper);
    button.setAttribute('aria-label', category.label);
    // Chỉ dùng nội dung cố định do dự án định nghĩa cho các nhãn và minh họa.
    button.innerHTML = `<span class="category-picture">${drinkArt(theme.icon)}</span><span class="category-copy"><strong>${category.label}</strong><span>${theme.description}</span></span><span class="category-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 12 4 4 8-8"/></svg></span>`;
    button.addEventListener('click', () => { session.choose(category.id); render(); });
    $('#drink-categories').append(button);
    buttons.set(category.id, button);
  }

  function persist() {
    saveGameState(storageKey, session.snapshot());
  }

  function render({ focus = null } = {}) {
    const choosing = session.phase === 'choose';
    const revealed = session.phase === 'revealed';
    const category = session.category;
    const theme = drinkThemes[category.id];
    app.dataset.phase = session.phase;
    app.style.setProperty('--paper', theme.paper);
    app.style.setProperty('--deck', theme.deck);
    $('#drink-pick-screen').hidden = !choosing;
    $('#drink-play-screen').hidden = choosing;
    for (const [id, button] of buttons) button.setAttribute('aria-pressed', String(id === category.id));
    $('#drink-selected').textContent = category.label;
    $('#drink-start').setAttribute('aria-label', `Bắt đầu chơi ${category.label}`);
    $('#drink-play-title').textContent = category.label;
    $('#drink-play-description').textContent = theme.hint;
    $('#drink-card-category').textContent = category.label;
    $('#drink-back-art').innerHTML = drinkArt(theme.icon);
    $('#drink-face-art').innerHTML = drinkArt(theme.icon);
    // Thẻ úp không chứa câu hỏi, kể cả trong cây trợ năng hoặc sau khi tải lại.
    question.textContent = session.question?.text || '';
    question.classList.toggle('is-long', (session.question?.text.length || 0) > 150);
    $('#drink-flipper').classList.toggle('is-revealed', revealed);
    $('#drink-card-front').setAttribute('aria-hidden', String(!revealed));
    reveal.disabled = revealed;
    reveal.tabIndex = revealed ? -1 : 0;
    reveal.setAttribute('aria-hidden', String(revealed));
    next.classList.toggle('is-primary', revealed);
    $('#drink-next-label').textContent = revealed ? 'Thẻ tiếp theo' : 'Bỏ qua thẻ này';
    $('#drink-turn-hint').textContent = revealed ? 'Trả lời thật lòng, chọn uống hoặc bỏ qua.' : 'Chuyền máy cho người chơi, rồi mở thẻ nhé.';
    persist();
    if (focus === 'question') question.focus({ preventScroll: true });
    if (focus === 'card') reveal.focus({ preventScroll: true });
  }

  function route() {
    const currentRoute = resolveRoute(location.hash);
    if (currentRoute.mode === 'truth-drink' && currentRoute.deck) {
      session.start(currentRoute.deck);
    } else {
      session.leave();
    }
    render();
  }

  $('#drink-start').addEventListener('click', () => { location.hash = `that-hay-uong/${session.category.id}`; });
  reveal.addEventListener('click', () => { session.reveal(); render({ focus: 'question' }); });
  next.addEventListener('click', () => { session.next(); render({ focus: 'card' }); });
  window.addEventListener('hashchange', route);
  route();
}
