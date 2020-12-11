import { addToArray } from "./index";

describe("addToArray function", () => {
  test("should add 1000 at the end of an array", () => {
    expect(addToArray([1, 2])).toEqual([1, 2, 1000]);
    expect(addToArray([1, 2, 3])).toEqual([1, 2, 3, 1000]);
    expect(addToArray([100, 200])).toEqual([100, 200, 1000]);
  });
});