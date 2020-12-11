import { isQuestion } from "./index";

describe("isQuestion function", () => {
  test("should return true, if last character in string is a question mark", () => {
    expect(isQuestion("Is this getting harder?")).toEqual(true);
  });

  test("should return false, if last character in string is not a question mark", () => {
    expect(isQuestion("It is not")).toEqual(false);
  });
});