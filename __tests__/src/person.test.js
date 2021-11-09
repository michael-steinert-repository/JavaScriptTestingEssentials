const {filterByGender} = require("./../../src/people");

describe("Testing Person", () => {
    test("should filter People by Gender", () => {
        /* Given */
        const people = [
            {firstName: "Michael", gender: "M"},
            {firstName: "Marie", gender: "F"}
        ]
        const expectedResult = [
            {firstName: "Marie", gender: "F"}
        ]
        /* When */
        const actualResult = filterByGender(people, "F");

        /* Then */
        expect(actualResult).toHaveLength(1);
        expect(actualResult).toEqual(expectedResult);
    });

    test("should filter People by wrong Gender", () => {
        /* Given */
        const people = [
            {firstName: "Michael", gender: "M"},
            {firstName: "Marie", gender: "F"}
        ]
        const expectedResult = []
        /* When */
        const actualResult = filterByGender(people, "D");

        /* Then */
        expect(actualResult).toHaveLength(0);
        expect(actualResult).toEqual(expectedResult);
    });
});