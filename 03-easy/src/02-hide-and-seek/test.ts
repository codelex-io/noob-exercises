import { hideAndSeek } from "./index";

describe("hideAndSeek function", () => {
  test("should return all lowercase letters", () => {
    expect(hideAndSeek("UcUNFYGaFYFYGtNUH")).toEqual("cat");
    expect(hideAndSeek("bEEFGBuFBRrHgUHlNFYaYr")).toEqual("burglar");
    expect(hideAndSeek("YFpHUFBrFBYFBYLGBYoEFGBMENT")).toEqual("pro");
  });
});