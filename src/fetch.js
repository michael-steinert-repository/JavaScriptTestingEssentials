const fetch = () => {
    const promise = new Promise((resolve, reject) => {
        return Promise.resolve().then(() => {
            setTimeout(() => {
                resolve("Data fetched");
            }, 100);
            setTimeout(() => {
                reject("An Error occurs");
            }, 50);
        })
    });
    return promise;
}

module.exports = {fetch};
