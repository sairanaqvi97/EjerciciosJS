
const divs = document.querySelectorAll("div.fn-insert-here");

divs.forEach((div) => {
    const p = document.createElement("p");
    p.innerHTML = "Voy dentro!"
    div.appendChild(p);

})