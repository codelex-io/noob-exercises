import { filterApples } from "./index";

describe("filterApples function", () => {
  test("should remove all words from array that do not equal 'apple'", () => {
    expect(filterApples(["pie", "pie"])).toEqual([]);
    expect(filterApples(["pie", "apple"])).toEqual(["apple"]);
    expect(filterApples(["apple", "MELLON", "apple", "apple"])).toEqual(["apple", "apple", "apple"]);
  });
});