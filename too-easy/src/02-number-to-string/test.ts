import { numberToString } from "./index";

describe("numberToString function", () => {
  test("should convert number to string", () => {
    expect(numberToString(123)).toEqual("123");
    expect(numberToString(1.543)).toEqual("1.543");
    expect(numberToString(100000000000)).toEqual("100000000000");
  });
});