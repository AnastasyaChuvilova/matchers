import healthRating from '../game';

const cases = [[
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
],
[
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
]];

test('rating characters by health', () => {
  const result = healthRating(cases[0]);
  expect(result).toEqual(cases[1]);
});
