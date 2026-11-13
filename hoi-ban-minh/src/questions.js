import { questionGroups } from './question-bank.js';

export const sources = [
  {
    name: 'Teen Vogue',
    title: '315 Truth or Dare Questions for Friends, From Deep to Spicy',
    url: 'https://www.teenvogue.com/story/best-truth-or-dare-questions',
  },
];

function makeDeck(type) {
  return Object.freeze(questionGroups
    .filter(group => group.type === type)
    .flatMap(group => group.items.map((text, index) => Object.freeze({
      id: `${group.id}-${index + 1}`,
      text,
    }))));
}

export const questions = Object.freeze({ truth: makeDeck('truth'), dare: makeDeck('dare') });
export const totalQuestions = questions.truth.length + questions.dare.length;
