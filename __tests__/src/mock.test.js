describe("Testing with Mocks", () => {
    describe("Testing Functions with Mocks", () => {
        test("should return Properties of Mock", () => {
            /* Given */
            const mockFunction = jest.fn();
            /* When - Then */
            expect(mockFunction()).toBeUndefined();
            expect(mockFunction.mock.results[0].value).toBeUndefined();
            /* Checking that Mock has been called */
            expect(mockFunction).toHaveBeenCalled()
            /* Checking that Mock has been once called */
            expect(mockFunction).toHaveBeenCalledTimes(1);
            expect(mockFunction.mock.calls.length).toBe(1);
        });
        test("should return Arguments of Mock", () => {
            /* Given */
            const mockFunction = jest.fn();
            /* When */
            mockFunction("Michael", "Marie");
            mockFunction("Bruno");
            /* Then */
            expect(mockFunction).toHaveBeenCalledWith("Michael", "Marie");
            /* Array: [Invocation][Argument] */
            expect(mockFunction.mock.calls[0][0]).toBe("Michael");
            expect(mockFunction.mock.calls[0][1]).toBe("Marie");
            expect(mockFunction.mock.calls[1][0]).toBe("Bruno");
        });
        test("should return Mock with Callback", () => {
            /* Given */
            const username = "Michael";
            const mockFunction = jest.fn((username) => {
                return `Hello ${username}`;
            });
            /* When - Then */
            expect(mockFunction(username)).toBe(`Hello ${username}`);
        });
        test("should return Mock with Implementation", () => {
            /* Given */
            const username = "Michael";
            const mockFunction = jest.fn().mockImplementation(
                (username) => {
                    return `Hello ${username}`;
                }
            );
            /* When - Then */
            expect(mockFunction(username)).toBe(`Hello ${username}`);
        });
        test("should return Mock with once Implementation", () => {
            /* Given */
            const username = "Michael";
            const mockFunction = jest.fn().mockImplementationOnce(
                (username) => {
                    return `Hello ${username}`;
                }
            );
            /* When - Then */
            expect(mockFunction(username)).toBe(`Hello ${username}`);
            expect(mockFunction(username)).toBeUndefined();
        });
        test("should return Values from Mock", () => {
            /* Given */
            const mockFunction = jest.fn();
            /* When */
            mockFunction.mockReturnValueOnce(42);
            mockFunction.mockReturnValue(1);
            /* Then */
            expect(mockFunction()).toBe(42);
            expect(mockFunction()).toBe(1);
            expect(mockFunction()).toBe(1);
        });
        test("should return Promises from Mock", () => {
            /* Given */
            const values = ["Michael", "Marie"];
            const mockFunction = jest.fn();
            /* When */
            mockFunction.mockResolvedValue(values);
            /* Then */
            expect(mockFunction()).resolves.toEqual(values);
        });
    });
});
