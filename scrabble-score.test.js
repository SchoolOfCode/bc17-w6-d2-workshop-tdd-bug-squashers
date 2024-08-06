import { test, expect } from "vitest";
import { calculateScrabbleScore , letterScores } from "./scrabble-score"; 
const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

test("score of a single letter", () => {
  expect(calculateScrabbleScore("A")).toEqual(1);
});  
test('score of each letter', () => {
  alphabet.forEach(letter => {
   expect(calculateScrabbleScore(letter)).toBe(letterScores[letter]) 
  });
});