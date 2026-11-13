import { drinkCategories } from './drink-questions.js';

// Bộ trộn dùng chính các câu đã có, không nhân đôi dữ liệu nguồn.
export const drinkDecks = [
  {
    id: 'all',
    label: 'Tất cả thể loại',
    questions: drinkCategories.flatMap(category => category.questions),
  },
  ...drinkCategories,
];
