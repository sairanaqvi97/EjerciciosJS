async function getDetails() {
    const response = await fetch("https://api.agify.io?name=michael");
    const personDetails = await response.json();
    console.log(personDetails);

    // getDetails();


    const listElement = document.querySelector("ul");

    const liElement = document.createElement("li");
    const h3Element = document.createElement("h3");
    const pElement = document.createElement("p");
    const h4Element = document.createElement("h4");

    const personName = personDetails.name;
    const personAge = personDetails.age;
    const personCount = personDetails.count;

    //paint in the inner HTML

    const nameCard = h3Element.innerHTML(personName);
    const ageCard = pElement.innerHTML(personAge);
    const scoreCard = h4Element.innerHTML(personCount);

    const createCard = liElement.innerHTML(nameCard, ageCard, h4Element);

}

getDetails()