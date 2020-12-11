import { stringToNumber } from "./index";

describe("stringToNumber function", () => {
  test("should convert string to number", () => {
    expect(stringToNumber("78")).toEqual(78);
    expect(stringToNumber("123")).toEqual(123);
    expect(stringToNumber("1234")).toEqual(1234);
  });
});