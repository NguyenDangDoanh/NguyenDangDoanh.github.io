import { resolveRoute, backDestination } from './routes.js';
const modes = {
  home: { title: 'Hội Bạn Mình', brand: 'hội bạn mình' },
  'truth-dare': { title: 'Thật hay Thách', brand: 'thật hay thách', help: 'help-dialog' },
  'truth-drink': { title: 'Thật hay Uống', brand: 'thật hay uống', help: 'drink-help-dialog' },
};
export function initModeSelection() {
  const views = [...document.querySelectorAll('[data-view]')];
  function showMode({ focus = false } = {}) {
    const route = resolveRoute(location.hash);
    const config = modes[route.mode];
    for (const view of views) view.hidden = view.dataset.view !== route.mode;
    document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    document.body.dataset.mode = route.mode;
    document.title = route.mode === 'home' ? config.title : `${config.title} — Hội Bạn Mình`;
    document.querySelector('#app-name').textContent = config.brand;
    const back = document.querySelector('#app-back');
    back.hidden = route.mode === 'home';
    back.href = backDestination(route);
    back.setAttribute('aria-label', route.type ? 'Quay lại chọn Thật hoặc Thách' : route.deck ? 'Quay lại chọn thể loại' : 'Quay lại chọn trò chơi');
    document.querySelector('#home-mark').hidden = route.mode !== 'home';
    document.querySelector('#app-install-shortcut').hidden = route.mode !== 'home';
    const help = document.querySelector('#mode-help');
    help.hidden = route.mode === 'home';
    if (config.help) help.dataset.dialog = config.help;
    if (focus) {
      const heading = [...views.find(view => view.dataset.view === route.mode).querySelectorAll('h1')].find(element => !element.closest('[hidden]'));
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }
  window.addEventListener('hashchange', () => showMode({ focus: true }));
  showMode();
}
