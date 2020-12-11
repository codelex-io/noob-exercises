import { roundTofixed } from "./index";

describe("roundTofixed function", () => {
  test("should round up number to have 2 decimal places", () => {
    expect(roundTofixed(1.253)).toEqual(1.25);
    expect(roundTofixed(5.3666)).toEqual(5.37);
    expect(roundTofixed(16.333)).toEqual(16.33);
  });
});