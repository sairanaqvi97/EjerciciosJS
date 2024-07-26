// const arrayRemove = [];

// const pEl = document.querySelectorAll(".fn-remove-me");

// arrayRemove.push(pEl);
// console.log(arrayRemove);

// arrayRemove.forEach((p) => {
//     ist.removeChild(list.children[0]);
// });


const body = document.querySelector("body");
const pElements = document.querySelectorAll("p.fn-remove-me");


console.log(pElements);

pElements.forEach(p => {
    p.remove();

});



// body.removeChild()