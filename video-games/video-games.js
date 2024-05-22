function createPlayer(name, age, moveset) {
    var player = {
        name: name,
        age: age,
        moveset: moveset,
    }
    return player;
}
function createLevel(levelName, players) {
    var level = {
        name: levelName,
        players: players,
        coins: 0,
        lives: 3,
    }
    // if (level.coins >= 100 ) {
    //     level.lives += 1;
    // }
    return level;
}
function findCoins(level, money) {
    level.coins += money;
    if (level.coins >= 100 ) {
        level.lives += 1;
    }
return level;
}

function defeatPlayer(level) {
    level.lives -= 1;
    if (level.lives <= 0) {
        return 'GAME OVER'
    }
    return level;
}


// what does it take in -
// does it return anything -
// what is it's purpose -

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer,
};