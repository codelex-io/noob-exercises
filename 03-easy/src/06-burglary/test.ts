import { burglary } from "./index";

describe("burglary function", () => {
    test("should return the total value of stolen items", () => {
        expect(burglary({ tv: 30, skate: 20, stereo: 50 })).toEqual(100);
        expect(burglary({ painting: 20000 })).toEqual(20000);
        expect(burglary({ ring: 250, neclace: 500 })).toEqual(750);
    });
    test("should return a string 'Lucky you!', if nothing was stolen", () => {
        expect(burglary({})).toEqual("Lucky you!");
    });
});