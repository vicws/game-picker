// swap the names inside the 'games' array [] for whatever you wanna randomize; you can put however many things you want inside, just remember to put them in quotes and separate with commas (const games = ["like", "this"]);
// at the bottom, choose how many times you wanna "roll" the dice (5); 
// the logs are commented, but you can remove the // below in case you want to, I don't know, check and count for yourself?

const games = ["Baldur's Gate 3", "Valorant", "League of Legends"];
function choose(n, array) {

    let chosenGames = [];
    for (let i = 0; i < array.length * n; i++) {
        chosenGames.push(Math.floor(Math.random() * array.length))
    }
    // console.log(chosenGames)
    const obj = {};

    chosenGames.forEach(choice => {

        if (!obj[choice]) {
            obj[choice] = 1;
        } else {

            obj[choice] += 1;
        }
    });

    let highestValue = -1;
    let highestValueKey;

    for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        }
    }
    // console.log(highestValue, highestValueKey)
    return games[highestValueKey];
}

console.log(choose(5, games));