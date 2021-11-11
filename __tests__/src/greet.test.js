const {greet, greetWithReturn} = require("./../../src/greet");

describe("Testing Greet with Username", () => {
    test("should greet User", (done) => {
        /* Given */
        const username = "Michael";
        const callback = (data) => {
            /* Then */
            try {
                expect(data).toBe(username);
                /* The Callback with Parameter "done" tells Jest to wait until these Parameter is invoked so the Test can invoke its Assertions */
                /* So it is guaranteed that all Assertions are invoked after calling the Callbacks */
                done();
            } catch (error) {
                /* Invoking the done Parameter to tell Jest that can finish its Test even an Exception in the Callback happens */
                done(error);
            }
        }
        /* When */
        greet(username, callback);
    });
    test("should greet User with Return", () => {
        /* Given */
        const username = "Michael";
        const expectedResult = `Hello ${username}`;
        const callback = jest.fn((_username) => {
            return `Hello ${_username}`
        });
        /* When */
        const actualResult = greetWithReturn(username, callback);
        /* Then */
        expect(actualResult).toBe(expectedResult);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith("Michael");
    });
});
