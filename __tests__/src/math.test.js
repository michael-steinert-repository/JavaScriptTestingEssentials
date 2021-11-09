/* One File correspond to one Test Suite - One Test Suite can contains many Tests */
const {add, numberOfOccurrences} = require("./../../src/math");

/* "describe" creates a Block that groups together related Tests in one Test Suite */
describe("Testing Math.js", () => {
    describe("Testing Addition", () => {
        test("it should add two Numbers", () => {
            /* Given */
            const a = 40;
            const b = 2;
            const expectedResult = 42;
            /* When */
            const actualResult = add(a, b);
            /* Then */
            expect(actualResult).toBe(expectedResult);
        });
    });

    describe("Testing Occurrences", () => {
        test("it should find Number of Occurrences", () => {
            /* Given */
            const numbers = [1, 2, 2, 2, 5];
            const expectedNumber = 3;
            /* When */
            const actualResult = numberOfOccurrences(numbers, 2);
            /* Then */
            expect(actualResult).toBe(expectedNumber);
        });

        test("it should find Number of Occurrences when not found", () => {
            /* Given */
            const numbers = [1, 2, 2, 2, 5];
            /* When */
            const actualResult = numberOfOccurrences(numbers, 42);
            /* Then */
            expect(actualResult).toBe(0);
        });
    });

    describe("Testing Exceptions", () => {
        test("it should throw an Exception if Input is not a Number", () => {
            /* Given */
            const numbers = [];
            /* When - Then */
            expect(() => numberOfOccurrences(numbers, "a")).toThrow("a is not a Number");
        });
    });
});
