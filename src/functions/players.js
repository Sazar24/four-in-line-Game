export function determinePlayerColor(symbol, players) {
    let matchAmount = 0;
    let matchedPlayer;

    for (let i = 0; i < players.length; i++) {
        if (players[i].symbol === symbol) {
            matchAmount++;
            matchedPlayer = players[i];
        }
    }

    if (matchAmount > 1) throw new Error('players symbols must be unique!');
    return matchedPlayer.color;
}