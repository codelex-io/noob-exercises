import { getLength } from "./index";

describe("getLength function", () => {
  test("should return the length of an array", () => {
    expect(getLength([])).toEqual(0);
    expect(getLength(["pie", "apple"])).toEqual(2);
    expect(getLength(["apple", "MELLON", "apple", "apple"])).toEqual(4);
  });
});