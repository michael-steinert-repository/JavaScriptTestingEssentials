/* beforeEach() is run before each Test */
beforeEach(() => {
    console.log("Setup Environment");
});
/* afterEach() is run after each Test */
afterEach(() => {
    console.log("Teardown Environment");
});
describe("Setup and Teardown",() => {
    test("Test", () => {
       expect(40+2).toBe(42);
    });
});
