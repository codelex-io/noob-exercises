import { rockPaperScissors } from "./index";

describe("rockPaperScissors function", () => {
    test("should return the winner of the game or 'Tie!' when there is no winner ", () => {
        expect(rockPaperScissors([["R", "P"], ["R", "S"], ["S", "P"]])).toEqual("Abigail");
        expect(rockPaperScissors([["R", "R"], ["S", "S"]])).toEqual("Tie!");
        expect(rockPaperScissors([["R", "P"], ["R", "P"], ["P", "R"]])).toEqual("Benson");
    });
});