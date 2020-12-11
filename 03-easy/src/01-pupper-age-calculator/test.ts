import { pupperAgeCalculator } from "./index";

describe("pupperAgeCalculator function", () => {
  test("should return dog's age in dog years", () => {
    expect(pupperAgeCalculator(1)).toEqual("Your doggie is 7 years old in dog years!");
    expect(pupperAgeCalculator(10)).toEqual("Your doggie is 70 years old in dog years!");
    expect(pupperAgeCalculator(15)).toEqual("Your doggie is 105 years old in dog years!");
  });
});