import { findThirdLetter } from "./index";

describe("findThirdLetter function", () => {
  test("should return the third character from string", () => {
    expect(findThirdLetter("WATER")).toEqual("T");
    expect(findThirdLetter("MELLON")).toEqual("L");
    expect(findThirdLetter("GAME OF THRONES")).toEqual("M");
  });
});