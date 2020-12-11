import { isNumber } from "./index";

describe("isNumber function", () => {
  test("should return true, if input is of type number", () => {
    expect(isNumber(15)).toEqual(true);
  });

  test("should return true, if input is not of type number", () => {
    expect(isNumber("Laptop")).toEqual(false);
  });
});