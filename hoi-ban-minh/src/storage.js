// Giữ phiên khi đóng/mở app; đọc lại khóa sessionStorage của bản cũ.
export function readGameState(key) {
  for (const name of ['localStorage', 'sessionStorage']) {
    try { const raw = globalThis[name].getItem(key); if (raw) return JSON.parse(raw); }
    catch { /* Vẫn chơi nếu lưu trữ bị chặn hoặc dữ liệu bị lỗi. */ }
  }
  return null;
}
export function saveGameState(key, value) {
  for (const name of ['localStorage', 'sessionStorage']) {
    try { globalThis[name].setItem(key, JSON.stringify(value)); return; }
    catch { /* Chuyển sang bộ nhớ phiên nếu không lưu lâu dài được. */ }
  }
}
