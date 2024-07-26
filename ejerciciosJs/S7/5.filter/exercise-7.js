const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' }, { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' }, { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }, { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];

function toFilterStreamers(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredStreamers = streamers.filter(streamer =>
      streamer.name.toLowerCase().includes(searchTerm)
    );

    console.log(filteredStreamers);
  }

  document.querySelector('input[data-function="toFilterStreamers"]').addEventListener('input', toFilterStreamers);