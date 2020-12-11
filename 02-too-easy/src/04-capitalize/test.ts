import { capialize } from "./index";

describe("capitalize function", () => {
  test("should capitalize all letters in string", () => {
    expect(capialize("The first oranges weren’t orange")).toEqual("THE FIRST ORANGES WEREN’T ORANGE");
    expect(capialize("1a337bo")).toEqual("1A337BO");
    expect(capialize("tHe enD")).toEqual("THE END");
  });
});