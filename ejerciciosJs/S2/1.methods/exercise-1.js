
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

let newArray = [];

for (let index = 0; index < products.length; index++) {
    console.log(products[index].includes("Camiseta"));

    if (products[index].includes("Camiseta")) {
        newArray.push(products[index])
    }
};

console.log(newArray);
