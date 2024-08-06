import { test, expect } from "vitest";
import { calculateScrabbleScore } from "./scrabble-score";

test("score of a single letter", () => {
  expect(calculateScrabbleScore("A")).toEqual(1);
});
