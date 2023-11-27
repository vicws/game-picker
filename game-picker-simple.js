// swap the names inside the 'games' array [] for whatever you wanna randomize; you can put however many things you want inside, just remember to put them in quotes and separate with commas (const games = ["like", "this"])

const games = ["Valorant", "League of Legends", "Checkers"]
function pickGame(games) {

    let randomSelection = Math.floor(Math.random() * games.length);
    console.log(`Madness...? THIS! IS! ${games[randomSelection]}!`)

}
pickGame(games);