const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newStreamers = streamers.filter(str => {
    if (str.gameMorePlayed.includes("Legends")) {
      if (str.age > 35) {
        str.gameMorePlayed = str.gameMorePlayed.toUpperCase();
      }
      return true;
    }
    return false;
  });
  
  console.log(newStreamers);