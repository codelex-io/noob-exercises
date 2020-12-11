import { digitalClock } from "./index";

describe("digitalClock function", () => {
    test("should convert seconds to a time string in format hh:mm:ss", () => {
        expect(digitalClock(5025)).toEqual("01:23:45");
        expect(digitalClock(61201)).toEqual("17:00:01");
        expect(digitalClock(87000)).toEqual("00:10:00");
    });
});