// scrabble-score.js
// Plan:
// 1. Use split("") on a string to break the word into an array of individual letters.
// 2. Create a loop that goes through each letter one by one.
// 3. For each letter, find out how many points it is worth using the pointsTable above.
// 4. Create a score variable and add the points for each letter to this score variable.
export const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
export function calculateScrabbleScore(word) {
  const letters = word.split("");
  let score = 0;
  letters.forEach(function (letter) {
    const letterPoints = letterScores[letter];
    if (letterPoints === undefined) {
      throw new Error(`Invalid letter: ${letter}`);
    }
    score = score + letterPoints;
  });
  return score;
}
