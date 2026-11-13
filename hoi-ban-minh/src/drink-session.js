import { createDrinkGame } from './drink-game.js';
import { drinkDecks } from './drink-decks.js';

// Tách việc chọn bộ bài / mở thẻ khỏi bộ xáo câu hỏi đang dùng.
// Không trả nội dung câu hỏi ra giao diện trước thao tác mở thẻ.
export function createDrinkSession(options = {}) {
  const game = createDrinkGame(options);
  let phase = 'choose';
  let selected = game.category.id;
  const findCategory = id => drinkDecks.find(category => category.id === id);
  return {
    get phase() { return phase; },
    get category() { return findCategory(selected); },
    get position() { return game.position; },
    get question() { return phase === 'revealed' ? game.current : null; },
    choose(id) {
      if (!findCategory(id)) throw new RangeError('Chủ đề không tồn tại.');
      selected = id;
      phase = 'choose';
    },
    start(id = selected) {
      if (!findCategory(id)) throw new RangeError('Chủ đề không tồn tại.');
      selected = id;
      game.select(id);
      phase = 'covered';
    },
    reveal() { if (phase === 'covered') phase = 'revealed'; },
    next() {
      if (phase === 'choose') return;
      game.next();
      phase = 'covered';
    },
    leave() { phase = 'choose'; },
    snapshot() { return game.snapshot(); },
  };
}
