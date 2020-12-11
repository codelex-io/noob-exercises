import { findingNemo } from "./index";

describe("findingNemo function", () => {
    test("should return a string 'I found Nemo at X!', X being the index value of the word 'Nemo', if 'Nemo' is found", () => {
        expect(findingNemo("I am finding Nemo !")).toEqual("I found Nemo at 3!");
        expect(findingNemo("Nemo is me")).toEqual("I found Nemo at 0!");
        expect(findingNemo("I Nemo am")).toEqual("I found Nemo at 1!");
    });
    test("should return a string 'I can't find Nemo :(', if 'Nemo' is not found", () => {
        expect(findingNemo("I am searching")).toEqual("I can't find Nemo :(");
    });
});