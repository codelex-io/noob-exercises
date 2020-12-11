import { roundUp } from "./index";

describe("roundUp function", () => {
  test("should round up number to closest whole number", () => {
    expect(roundUp(100.3)).toEqual(101);
    expect(roundUp(1.25)).toEqual(2);
    expect(roundUp(5.336)).toEqual(6);
  });
});