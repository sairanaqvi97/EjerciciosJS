const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

function createMutation() {
const Cucushumushu = aliens.find(({ name }) => name === "Cucushumushu");
const  Porompompero = mutations.find( ({ name })=> name === "Porompompero");

Cucushumushu.mutations = Porompompero;

console.log(aliens);
};


createMutation()
