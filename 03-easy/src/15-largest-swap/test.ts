import { largestSwap } from "./index";

describe("largestSwap function", () => {
    test("should return true if it's the largest of two possible digit swaps, false if not", () => {
        expect(largestSwap(27)).toEqual(false);
        expect(largestSwap(43)).toEqual(true);
        expect(largestSwap(14)).toEqual(false);
    });
});