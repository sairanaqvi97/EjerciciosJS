const p = document.createElement("p");
p.innerHTML = "Voy en medio!"

const divs = document.querySelectorAll("div")

divs[0].insertAdjacentElement("afterbegin", p);