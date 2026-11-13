// Minh họa vector riêng cho từng bộ bài, dùng cùng nét vẽ và màu mực.
export const drinkThemes = {
  all: { description: 'Trộn mọi bộ bài.', hint: 'Mỗi thẻ, một bất ngờ mới.', paper: '#c9dff5', deck: '#315b84', icon: 'mix' },
  fun: { description: 'Chuyện vui để mở màn.', hint: 'Cứ kể đi, cả hội đang nghe.', paper: '#f8dc85', deck: '#6750a4', icon: 'smile' },
  deep: { description: 'Gần nhau thêm một chút.', hint: 'Một câu hỏi, thêm một chút hiểu nhau.', paper: '#c4e5d8', deck: '#2c6a5a', icon: 'heart' },
  random: { description: 'Chẳng biết đâu mà lần.', hint: 'Câu chuyện tiếp theo sẽ là gì?', paper: '#dacdf8', deck: '#6750a4', icon: 'shuffle' },
  spicy: { description: 'Dám nói thật không?', hint: 'Thật lòng đến đâu, tùy bạn.', paper: '#ffc6ae', deck: '#9d3c32', icon: 'flame' },
  couples: { description: 'Chuyện của hai người.', hint: 'Để những điều chưa nói được lên tiếng.', paper: '#f2cadd', deck: '#963c64', icon: 'cherries' },
};

const drawings = {
  mix: '<rect x="8" y="22" width="39" height="55" rx="8" transform="rotate(-18 28 49)" fill="#f8dc85"/><rect x="49" y="22" width="39" height="55" rx="8" transform="rotate(18 68 49)" fill="#c4e5d8"/><rect x="28" y="14" width="40" height="62" rx="8" fill="var(--art-fill,#f4f8ff)"/><path d="M36 35h5c5 0 9 20 14 20h5m-5-5 5 5-5 5M36 55h5c2 0 4-3 6-7m4-7c1-3 3-6 5-6h4m-5-5 5 5-5 5M44 85h8"/>',
  smile: '<path d="m48 5 9 8 12-2 5 11 12 4-1 12 8 10-8 9 1 12-12 5-5 11-12-2-9 8-9-8-12 2-5-11-12-5 1-12-8-9 8-10-1-12 12-4 5-11 12 2Z" fill="var(--art-fill,#fff6d8)"/><path d="M33 34v9m30-9v9M30 55c5 17 31 17 36 0"/>',
  heart: '<path d="M14 48C-1 23 26 6 48 28 70 6 97 23 82 48L48 79Z" fill="var(--art-fill,#f6fff9)"/><path d="M31 40v8m32-8v8M39 57q9 8 18 0m-7 25 5 8M13 70l-6 3M83 12l5-6"/>',
  shuffle: '<rect x="11" y="18" width="49" height="65" rx="10" transform="rotate(-12 35 50)" fill="var(--art-fill,#f8f3ff)"/><rect x="37" y="12" width="46" height="65" rx="10" transform="rotate(12 60 44)" fill="var(--paper,#dacdf8)"/><path d="m56 28 14 3-17 22 14 3M20 38l7-2m-4-3 2 7M72 82l4 7m8-15 8 1"/>',
  flame: '<path d="M51 8c5 25 23 25 17 46 9-4 11-12 11-17C99 65 79 88 49 88 17 88 5 64 23 42c1 13 7 16 11 13C25 37 46 28 51 8Z" fill="var(--art-fill,#fff4db)"/><path d="M50 56c-1 10-16 12-13 22 3 13 25 12 26 0 1-8-9-10-13-22ZM14 22l-5-5M78 12l4-6"/>',
  cherries: '<path d="M45 13c0 21-9 32-20 44m20-44c-2 20 14 27 25 44"/><path d="M45 13C52 0 73 5 77 17c-14 7-26 7-32-4Z" fill="var(--art-fill,#fff1f7)"/><circle cx="26" cy="66" r="20" fill="var(--art-fill,#fff1f7)"/><circle cx="70" cy="66" r="20" fill="var(--art-fill,#fff1f7)"/><path d="M17 61v4m15-4v4m-12 9q5 4 10 0m31-13v4m15-4v4m-12 9q5 4 10 0"/>',
};

export function drinkArt(name) {
  return `<svg class="drink-art" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name] || drawings.smile}</svg>`;
}
