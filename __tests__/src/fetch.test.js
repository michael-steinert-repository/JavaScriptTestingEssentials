const {fetch} = require("./../../src/fetch");

describe("Testing Fetch with Data", () => {
    test("should fetch Data", () => {
        /* Given */
        const expectedResult = "Data fetched";
        /* When - Then */
        fetch().then((data) => {
            expect(data).toBe(expectedResult);
        });
    });
    test("should fetch Data - short Syntax", () => {
        /* Given */
        const expectedResult = "Data fetched";
        /* When - Then */
        expect(fetch()).resolves.toBe(expectedResult);
    });
    test("should asynchronous fetch Data", async () => {
        /* Given */
        const expectedResult = "Data fetched";
        /* When - Then */
        const actualResult = await fetch();
        expect(actualResult).toBe(expectedResult);
    });
    test("should asynchronous fetch Data - sbhort Syntax", async () => {
        /* Given */
        const expectedResult = "Data fetched";
        /* When - Then */
        await expect(fetch()).resolves.toBe(expectedResult);
    });
    test("should catch Error", () => {
        /* Given */
        const expectedResult = "An Error occurs";
        /* When - Then */
        /* Best Practice to ensure that the Assertion is called once */
        expect.assertions(1);
        return fetch().catch((error) => {
            expect(error).toMatch(expectedResult);
        });
    });
    test("should catch Error - short Syntax", () => {
        /* Given */
        const expectedResult = "An Error occurs";
        /* When - Then */
        return expect(fetch()).rejects.toMatch(expectedResult);
    });
    test("should asynchronous catch Error", async () => {
        /* Given */
        const expectedResult = "An Error occurs";
        /* When - Then */
        /* Best Practice to ensure that the Assertion is called once */
        expect.assertions(1);
        try {
            await fetch();
        } catch (error) {
            expect(error).toMatch(expectedResult);
        }
    });
    test("should asynchronous catch Error - short Syntax", async () => {
        /* Given */
        const expectedResult = "An Error occurs";
        /* When - Then */
        /* Best Practice to ensure that the Assertion is called once */
        expect.assertions(1);
        await expect(fetch()).rejects.toMatch(expectedResult);
    });
});
