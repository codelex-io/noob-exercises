import { secretSociety } from "./index";

describe("secretSociety function", () => {
  test("should return a string of first letters from array items", () => {
    expect(secretSociety(["Adam", "Sarah", "Malcolm"])).toEqual("AMS");
    expect(secretSociety(["Harry", "Newt", "Luna", "Cho"])).toEqual("CHLN");
    expect(secretSociety(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])).toEqual("CJMPRR");
  });
});