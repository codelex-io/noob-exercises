import { stringToArray } from "./index";

describe("stringToArray function", () => {
  test("should convert string to array", () => {
    expect(stringToArray("Cat")).toEqual(["C", "a", "t"]);
    expect(stringToArray("Cat said meow")).toEqual(["C", "a", "t", " ", "s", "a", "i", "d", " ", "m", "e", "o", "w"]);
    expect(stringToArray("Meow, meow!")).toEqual(["M", "e", "o", "w", ",", " ", "m", "e", "o", "w", "!"]);
  });
});