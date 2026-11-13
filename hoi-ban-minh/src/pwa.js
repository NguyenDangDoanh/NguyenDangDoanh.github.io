export async function initPwa() {
  const status = document.querySelector('#pwa-status');
  const note = document.querySelector('#install-address-note');
  const localPreview = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (standalone) document.querySelector('#install-card strong').textContent = 'Hội Bạn Mình trên iPhone';
  if (localPreview) note.textContent = 'Đây là bản xem thử trên máy tính. Để cài trên iPhone, hãy mở đường dẫn HTTPS của ứng dụng bằng Safari.';
  else if (!isSecureContext) note.textContent = 'Hãy mở đường dẫn HTTPS của ứng dụng trên Safari iPhone để cài và tải dữ liệu chơi ngoại tuyến.';

  if (!('serviceWorker' in navigator) || !isSecureContext) {
    status.textContent = 'Mở đường dẫn HTTPS để cài trên iPhone.';
    status.dataset.state = 'unavailable';
    return;
  }
  let refreshing = false;
  let updateRequested = false;
  const previouslyControlled = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if ((previouslyControlled || updateRequested) && !refreshing) { refreshing = true; location.reload(); }
  });
  try {
    const registration = await navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' });
    function showUpdate() {
      if (registration.waiting && navigator.serviceWorker.controller) document.querySelector('#app-update').hidden = false;
    }
    showUpdate();
    function watchInstalling(worker) {
      worker?.addEventListener('statechange', () => {
        if (worker.state === 'installed') showUpdate();
        if (worker.state === 'redundant' && !registration.active) {
          status.textContent = 'Chưa tải đủ để chơi ngoại tuyến. Mở lại khi có mạng nhé.';
          status.dataset.state = 'unavailable';
        }
      });
    }
    watchInstalling(registration.installing);
    registration.addEventListener('updatefound', () => watchInstalling(registration.installing));
    document.querySelector('#apply-update').addEventListener('click', () => {
      if (registration.waiting) {
        updateRequested = true;
        registration.waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
      }
    });
    await navigator.serviceWorker.ready;
    status.textContent = 'Đã sẵn sàng chơi khi mất mạng.';
    status.dataset.state = 'ready';
    if (!localPreview && isSecureContext) note.textContent = standalone ? 'Ứng dụng đã được mở từ Màn hình chính. Bộ câu hỏi đã sẵn sàng để chơi khi mất mạng.' : 'Bộ câu hỏi đã tải xong. Sau khi thêm ứng dụng, hãy mở từ Màn hình chính một lần khi có mạng.';
  } catch {
    status.textContent = 'Chưa tải đủ để chơi ngoại tuyến. Mở lại khi có mạng nhé.';
    status.dataset.state = 'unavailable';
  }
}
