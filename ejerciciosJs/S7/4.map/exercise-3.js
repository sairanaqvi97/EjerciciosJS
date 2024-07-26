const cities = [{ isVisited: true, name: 'Tokyo' }, { isVisited: false, name: 'Madagascar' }, { isVisited: true, name: 'Amsterdam' }, { isVisited: false, name: 'Seul' }];

const cityName = cities.map(city => city.isVisited ? city.name : `${city.name} (Visitado)`);

console.log(cityName)