import { reverseArray } from "./index";

describe("reverseArray function", () => {
  test("should reverse array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverseArray(['I', 'AM', 'HERE'])).toEqual(["HERE", "AM", "I"]);
  });
});