const isLogged = true;

const isLoggedIn = (isLogged) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged === true) {
                resolve(Math.random());
            } else {
                reject(new Error("Not logged in!"));
            }
        }, 1000);
    })
};

const takeUserInfo = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject(new Error("User not found!"));
            }
        }, 1000);
    });
};

isLoggedIn(isLogged)
    .then((randomNumber) => takeUserInfo(randomNumber))
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log("Don't worry, be happy."));
    