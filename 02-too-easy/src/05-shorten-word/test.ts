import { shortenWord } from "./index";

describe("shortenWord function", () => {
  test("should return the first 3 characters of a string", () => {
    expect(shortenWord("Earthquake")).toEqual("Ear");
    expect(shortenWord("Getto")).toEqual("Get");
    expect(shortenWord("Table")).toEqual("Tab");
  });
});