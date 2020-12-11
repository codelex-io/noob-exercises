import { echo } from "./index";

describe("echo function", () => {
    test("should return the given text repeated n times", () => {
        expect(echo("ab", 3)).toEqual("ababab");
        expect(echo("kiwi", 1)).toEqual("kiwi");
        expect(echo("cherry", 2)).toEqual("cherrycherry");
    });
});