import { matchMaker } from "./index";

describe("matchMaker function", () => {
    test("should return a new array of arrays with couples, if given array sizes match and 'Cupid is on vacation' if not ", () => {
        expect(matchMaker(["Elise", "Mary"], ["John", "Rick"])).toEqual([["Elise", "John"], ["Mary", "Rick"]]);
        expect(matchMaker(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])).toEqual("Cupid is on vacation");
        expect(matchMaker(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])).toEqual([["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]);
    });
});