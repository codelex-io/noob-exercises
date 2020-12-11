import { divideAll } from "./index";

describe("divideAll function", () => {
  test("should divide each number in an array by 2", () => {
    expect(divideAll([2, 4, 6])).toEqual([1, 2, 3]);
    expect(divideAll([8, 2, 10])).toEqual([4, 1, 5]);
    expect(divideAll([88, 22, 100, 26])).toEqual([44, 11, 50, 13]);
  });
});