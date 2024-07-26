const button = document.createElement("button");
button.setAttribute("id", "btnToClick");
button.innerHTML = "Click me"

const body = document.querySelector("body");
body.appendChild(button);

button.addEventListener("click", (e) => {
    console.log(e)
})

