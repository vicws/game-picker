const games = ["Baldur's Gate 3", "Valorant", "League of Legends"];
function choose(array) {

    let chosenGames = [];
    for (let i = 0; i < array.length * 10; i++) {
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

console.log(choose(games));