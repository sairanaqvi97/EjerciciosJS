const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const ul = document.createElement("ul");

for (let index = 0; index < apps.length; index++) {
    const li = document.createElement("li");
    li.innerHTML = apps[index];
    ul.appendChild(li);
}

document.body.appendChild(ul);

