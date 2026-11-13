import { createGame } from './game.js';
import { readGameState, saveGameState } from './storage.js';
import { resolveRoute } from './routes.js';
import { drinkArt } from './drink-theme.js';

export function initTruthDare() {
  const key = 'that-hay-thach-teenvogue-v2';
  const game = createGame({ savedState: readGameState(key) });
  const $ = selector => document.querySelector(selector);
  let previousType = game.current?.type || 'truth';
  function render({ focus = false } = {}) {
    const current = game.current;
    $('#choice-screen').hidden = Boolean(current);
    $('#question-screen').hidden = !current;
    $('#dare-choice-intro').hidden = Boolean(current);
    $('#dare-question-heading').hidden = !current;
    if (current) {
      previousType = current.type;
      const truth = current.type === 'truth';
      $('#question-card').className = `question-card ${truth ? 'is-truth' : 'is-dare'}`;
      $('#question-type').textContent = truth ? 'Thật lòng nào' : 'Thử thách tới rồi';
      $('#dare-question-title').textContent = truth ? 'Mình chọn Thật.' : 'Mình chọn Thách.';
      $('#dare-question-subtitle').textContent = truth ? 'Cứ kể đi, cả hội đang nghe.' : 'Một chút can đảm, thật nhiều tiếng cười.';
      $('#question-art').innerHTML = drinkArt(truth ? 'heart' : 'flame');
      $('#question-text').textContent = current.text;
      $('#question-text').classList.toggle('is-long', current.text.length > 150);
      if (focus) $('#question-text').focus({ preventScroll: true });
    } else {
      $('#question-text').textContent = '';
      if (focus) $(`#choose-${previousType}`).focus({ preventScroll: true });
    }
    saveGameState(key, game.snapshot());
  }
  function route() {
    const route = resolveRoute(location.hash);
    if (route.mode !== 'truth-dare') return;
    if (route.type) { if (game.current?.type !== route.type) game.draw(route.type); }
    else game.chooseAgain();
    render();
  }
  for (const type of ['truth', 'dare']) {
    $(`#choose-${type}`).addEventListener('click', () => { location.hash = `that-hay-thach/${type}`; });
  }
  $('#another-question').addEventListener('click', () => {
    if (!game.current) return;
    game.draw(game.current.type);
    render({ focus: true });
  });
  $('#next-turn').addEventListener('click', () => {
    game.nextTurn();
    saveGameState(key, game.snapshot());
    location.hash = 'that-hay-thach';
  });
  window.addEventListener('hashchange', route);
  route();
}
