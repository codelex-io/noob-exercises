import { vacationBudget } from "./index";

describe("vacationBudget function", () => {
    test("should return the sum of people's budgets", () => {
        expect(vacationBudget([
            { name: "John", age: 21, budget: 23000 },
            { name: "Steve", age: 32, budget: 40000 },
            { name: "Martin", age: 16, budget: 2700 }
        ])).toEqual(65700);
        expect(vacationBudget([
            { name: "John", age: 21, budget: 29000 },
            { name: "Steve", age: 32, budget: 32000 },
            { name: "Martin", age: 16, budget: 1600 }
        ])).toEqual(62600);
        expect(vacationBudget([
            { name: "Chloe", age: 12, budget: 0 },
            { name: "Emily", age: 68, budget: 1200 },
            { name: "Bob", age: 70, budget: 1200 }
        ])).toEqual(2400);
    });
});