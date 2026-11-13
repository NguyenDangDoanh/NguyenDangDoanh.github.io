import { drinkDecks } from './drink-decks.js';

// Mỗi chủ đề có một bộ bài riêng. Đổi chủ đề không làm mất câu đang đọc.
export function createDrinkGame({ random = Math.random, savedState = null } = {}) {
  const categories = new Map(drinkDecks.map(category => [category.id, category]));
  let selected = 'fun';
  const piles = Object.fromEntries(drinkDecks.map(category => [category.id, { remaining: [], current: null }]));

  if (savedState?.version === 1 && categories.has(savedState.selected)) {
    selected = savedState.selected;
    for (const category of drinkDecks) {
      const saved = savedState.piles?.[category.id];
      const ids = new Set(category.questions.map(question => question.id));
      if (saved && ids.has(saved.current) && Array.isArray(saved.remaining)
        && saved.remaining.every(id => ids.has(id) && id !== saved.current)
        && new Set(saved.remaining).size === saved.remaining.length) {
        piles[category.id] = { current: saved.current, remaining: [...saved.remaining] };
      }
    }
  }

  function draw() {
    const pile = piles[selected];
    const questions = categories.get(selected).questions;
    if (pile.remaining.length === 0) {
      pile.remaining = questions.map(question => question.id);
      for (let i = pile.remaining.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [pile.remaining[i], pile.remaining[j]] = [pile.remaining[j], pile.remaining[i]];
      }
      // Không lặp lại ngay câu cuối của bộ trước khi xáo sang bộ mới.
      const last = pile.remaining.length - 1;
      if (pile.remaining[last] === pile.current) {
        [pile.remaining[0], pile.remaining[last]] = [pile.remaining[last], pile.remaining[0]];
      }
    }
    pile.current = pile.remaining.pop();
    return currentQuestion();
  }

  function currentQuestion() {
    return categories.get(selected).questions.find(question => question.id === piles[selected].current);
  }

  if (!currentQuestion()) draw();

  return {
    get category() { return categories.get(selected); },
    get current() { return currentQuestion(); },
    get position() { return categories.get(selected).questions.length - piles[selected].remaining.length; },
    select(id) {
      if (!categories.has(id)) throw new RangeError('Chủ đề không tồn tại.');
      selected = id;
      return currentQuestion() || draw();
    },
    next: draw,
    snapshot() { return JSON.parse(JSON.stringify({ version: 1, selected, piles })); },
  };
}
