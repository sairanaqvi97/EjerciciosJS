


async function callApi() {
    const buttonElement = document.querySelector("button");
    const inputElement = document.querySelector("input");


    buttonElement.addEventListener("click", async () => {
        const inputContent = inputElement.value.trim();

        if (inputContent && inputContent === user.name) {
            try {
                const baseUrl = `https://api.nationalize.io?name=${user.name}`;
                const response = await fetch(baseUrl);
                const user = response.json();


            } catch (error) {
                console.error('Error fetching the API:', error);
                alert("Hubo un error al consultar la API");
            };
        }
        else {
            alert("Por favor, ingresa un criterio de búsqueda")
        }

    })
};


function paintResults() {
    const container = document.createElement("div");
    const searchInfo = document.createElement("h1");
    const nameInfo = document.createElement("h3");
    const countryInfo = document.createElement("p");

    searchInfoContent = `There are ${user.count} results`
    searchInfo.innerHTML(searchInfoContent);

    name
}

callApi();