import { discount } from "./index";

describe("discount function", () => {
    test("should return the final price after the discount", () => {
        expect(discount(1500, 50)).toEqual(750);
        expect(discount(89, 20)).toEqual(71.2);
        expect(discount(100, 75)).toEqual(25);
    });
});