const div = document.createElement("div");

const pArray = [document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p"), document.createElement("p")];


pArray.forEach(p => {
    div.appendChild(p)

});

console.log(div);

