const greet = (username, callback) => {
    if (callback) {
        callback(username);
    } else {
        console.log(username);
    }
}

const greetWithReturn = (username, callback) => {
    if (callback) {
        return callback(username);
    } else {
        return `Hello ${username}`;
    }
}

module.exports = {greet, greetWithReturn};
