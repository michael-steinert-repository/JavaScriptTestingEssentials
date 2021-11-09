class NotANumberError extends Error {
    constructor(message) {
        super(message);
        this.name= "NotANumberError";
    }
}

const add = (a, b) => {
    return a + b;
}

const numberOfOccurrences = (numbers, number) => {
    if (isNaN(number)) {
        throw new NotANumberError(`${number} is not a Number`);
    }
    let count = 0;
    for (const n of numbers) {
        if (n === number) {
            count++;
        }
    }
    return count;
}

module.exports = {add, numberOfOccurrences};
