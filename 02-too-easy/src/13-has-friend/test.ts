import { hasFriend } from "./index";

describe("hasFriend function", () => {
  test("should return true, if array includes 'friend'", () => {
    expect(hasFriend(["enemy", "friend", "enemy"])).toEqual(true);
  });

  test("should return true, if array does not include 'friend'", () => {
    expect(hasFriend(["enemy", "enemy"])).toEqual(false);
  });
});