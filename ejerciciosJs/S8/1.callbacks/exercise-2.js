const userAnwsers = [];



function confirmExample(description) {
    return confirm(description)
}

function promptExample(description) {
    const propmt = prompt(description);
    return propmt(description)
}

function father(description, cb) {
    return cb(description)
}

let confirmFuction = father("Deseas continuar?", confirmExample);
let promptFunction = father("Por favor, confirma tu nombre", promptExample);


userAnwsers.push(confirmFuction);
userAnwsers.push(promptFunction);
console.log(userAnwsers);


// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');

