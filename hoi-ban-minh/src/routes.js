import { drinkDecks } from './drink-decks.js';
export function resolveRoute(hash) {
  const [base, item] = hash.replace(/^#/, '').split('/');
  if (base === 'that-hay-thach') return { mode: 'truth-dare', type: ['truth', 'dare'].includes(item) ? item : null };
  if (base === 'that-hay-uong') return { mode: 'truth-drink', deck: drinkDecks.some(deck => deck.id === item) ? item : null };
  return { mode: 'home' };
}
export function backDestination(route) {
  if (route.mode === 'truth-dare' && route.type) return '#that-hay-thach';
  if (route.mode === 'truth-drink' && route.deck) return '#that-hay-uong';
  return '#chon-tro-choi';
}
