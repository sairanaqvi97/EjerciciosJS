const toys = [{ id: 5, name: 'Buzz MyYear' }, { id: 11, name: 'Action Woman' }, { id: 23, name: 'Barbie Man' }, { id: 40, name: 'El gato con Guantes' }, { id: 40, name: 'El gato felix' }];

const indexesToRemove = [];

for (const toy of toys) {
    if (toy.name.toLowerCase().includes('gato')) {
        indexesToRemove.push(toys.indexOf(toy));
    }
}

// Remove the toys with indexes collected
for (let i = indexesToRemove.length - 1; i >= 0; i--) {
    toys.splice(indexesToRemove[i], 1);
};

console.log(toys)
