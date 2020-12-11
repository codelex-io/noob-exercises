import { replaceCommas } from "./index";

describe("replaceCommas function", () => {
  test("should replace all commas with question marks in a string", () => {
    expect(replaceCommas("Peanut butter, Sandwich")).toEqual("Peanut butter? Sandwich");
    expect(replaceCommas("Go, Where,,,")).toEqual("Go? Where???");
    expect(replaceCommas(",,,")).toEqual("???");
  });
});