import { maxMin } from "./index";

describe("maxMin function", () => {
    test("should return both the minimum and maximum numbers, in that order in a new array", () => {
        expect(maxMin([1, 2, 3, 4, 5])).toEqual([1, 5]);
        expect(maxMin([2334454, 5])).toEqual([5, 2334454]);
        expect(maxMin([1])).toEqual([1, 1]);
    });
});