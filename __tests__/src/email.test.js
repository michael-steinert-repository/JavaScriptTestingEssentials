const {validator} = require("./../../src/email");

describe("Testing Email", () => {
    describe("Testing Email with Table Testing", () => {
        describe.each([
            ["michael@mail.com", true],
            ["michael.com", false],
        ])("Email %s should be %o", (email, expectedResult) => {
            test(`${email} is ${expectedResult}`, () => {
                /* Given */
                /* When */
                const actualResult = validator(email);
                /* Then */
                expect(actualResult).toBe(expectedResult);
            });
        });
    });
    describe("Testing Email with Tagged Template Literal Testing", () => {
        describe.each`
            email | expectedResult
            ${"michael@mail.com"} | ${true}
            ${"michael.com"} | ${false}
        `("Email ${email} should be ${expectedResult}", ({email, expectedResult})=> {
            test(`${email} is ${expectedResult}`, () => {
                /* Given */
                /* When */
                const actualResult = validator(email);
                /* Then */
                expect(actualResult).toBe(expectedResult);
            });
        });
    });
});
