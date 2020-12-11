import { doubleTrouble } from "./index";

describe("doubleTrouble function", () => {
    test("should remove duplicate values from array", () => {
        expect(doubleTrouble(["John", "Taylor", "John"])).toEqual(["John", "Taylor"]);
        expect(doubleTrouble(["Ann", "Ann", "Ann"])).toEqual(["Ann"]);
        expect(doubleTrouble(["John", "Taylor"])).toEqual(["John", "Taylor"]);
    });
});