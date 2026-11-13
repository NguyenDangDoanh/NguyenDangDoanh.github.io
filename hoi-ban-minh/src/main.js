import { initTruthDare } from './truth-dare.js';
import { initDrinkGame } from './drink.js';
import { initModeSelection } from './mode-selection.js';
import { initPwa } from './pwa.js';
import { drinkArt } from './drink-theme.js';
import { sources } from './questions.js';

document.querySelectorAll('[data-art]').forEach(element => { element.innerHTML = drinkArt(element.dataset.art); });
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelectorAll('.close-dialog, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
for (const source of sources) {
  const link = document.createElement('a');
  link.href = source.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = `${source.name} — ${source.title}`;
  document.querySelector('#source-links').append(link);
}
initTruthDare();
initDrinkGame();
initModeSelection();
initPwa();
