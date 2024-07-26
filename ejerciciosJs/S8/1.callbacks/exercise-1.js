const numbersList = [];

function sum(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function father(a, b, cb) {
    return cb(a, b)
}

let sumResult = father(20, 30, sum);

numbersList.push(sumResult);

let substractResult = father(20, 30, substract);

numbersList.push(substractResult);

console.log(numbersList);
