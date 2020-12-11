import { findTreasure } from "./index";

describe("findTreasure function", () => {
  test("should return the index value of the word 'treasure' from an array", () => {
    expect(findTreasure(['treasure', 'sand', 'sand', 'boot'])).toEqual(0);
    expect(findTreasure(['sand', 'sand', 'treasure', 'sand', 'boot'])).toEqual(2);
    expect(findTreasure(['sand', 'sand', 'sand'])).toEqual(-1);
  });
});