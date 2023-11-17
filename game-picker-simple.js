const games = ["Valorant", "League of Legends", "Checkers"]
function pickGame(games) {

    let randomSelection = Math.floor(Math.random() * games.length);
    console.log(`Madness...? THIS! IS! ${games[randomSelection]}!`)

}
pickGame(games);