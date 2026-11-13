import { questions } from './questions.js';

const types = ['truth', 'dare'];
const freshState = () => ({ version: 1, round: 1, current: null, decks: { truth: [], dare: [] }, last: { truth: null, dare: null } });

function isValidState(value) {
  if (!value || value.version !== 1 || !Number.isSafeInteger(value.round) || value.round < 1) return false;
  for (const type of types) {
    const ids = new Set(questions[type].map(question => question.id));
    const deck = value.decks?.[type];
    if (!Array.isArray(deck) || deck.some(id => !ids.has(id)) || new Set(deck).size !== deck.length) return false;
    if (value.last?.[type] !== null && !ids.has(value.last?.[type])) return false;
    if (deck.includes(value.last[type])) return false;
  }
  const current = value.current;
  return current === null || (types.includes(current?.type) && typeof current.id === 'string' && current.id === value.last[current.type]);
}

export function createGame({ savedState = null, random = Math.random } = {}) {
  const state = isValidState(savedState) ? structuredClone(savedState) : freshState();

  function draw(type) {
    if (!types.includes(type)) throw new TypeError('Loại câu hỏi không hợp lệ.');
    if (state.decks[type].length === 0) {
      const deck = questions[type].map(question => question.id);
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      // Bắt đầu bộ mới mà không lặp lại ngay câu cuối của bộ trước.
      if (deck.at(-1) === state.last[type]) [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
      state.decks[type] = deck;
    }
    const id = state.decks[type].pop();
    state.last[type] = id;
    state.current = { type, id };
    return questions[type].find(question => question.id === id);
  }

  return {
    draw,
    chooseAgain() { state.current = null; },
    nextTurn() {
      if (state.current) state.round++;
      state.current = null;
    },
    get current() {
      if (!state.current) return null;
      return { ...questions[state.current.type].find(question => question.id === state.current.id), type: state.current.type };
    },
    get round() { return state.round; },
    snapshot() { return structuredClone(state); },
  };
}
