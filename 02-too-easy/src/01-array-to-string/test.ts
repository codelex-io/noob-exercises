import { arrayToString } from "./index";

describe("arrayToString function", () => {
  test("should convert array to string", () => {
    expect(arrayToString(["Cat"])).toEqual("Cat");
    expect(arrayToString(["Cat", "rabbit", "mouse"])).toEqual("Cat, rabbit, mouse");
    expect(arrayToString(["Meow", "meow!"])).toEqual("Meow, meow!");
  });
});