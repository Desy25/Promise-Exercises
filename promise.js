const number = 15;
let ourPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number);
        } else {
            reject(new Error(`${number} is not valid`));
        }
    })
};

ourPromise(number)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));