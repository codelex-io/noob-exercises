import { boxVolume } from "./index";

describe("boxVolume function", () => {
    test("should return sum of volumes of all boxes", () => {
        expect(boxVolume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]])).toEqual(63);
        expect(boxVolume([[2, 2, 2], [2, 1, 1]])).toEqual(10);
        expect(boxVolume([[1, 1, 1]])).toEqual(1);
    });
});