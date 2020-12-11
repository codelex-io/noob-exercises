import { removeWhitespace } from "./index";

describe("removeWhitespace function", () => {
  test("should remove whitespace from string", () => {
    expect(removeWhitespace("A good day it was   ")).toEqual("A good day it was");
    expect(removeWhitespace("  A good day it was")).toEqual("A good day it was");
    expect(removeWhitespace("  A good day it was   ")).toEqual("A good day it was");
  });
});