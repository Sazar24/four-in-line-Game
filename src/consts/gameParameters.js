export const gameParameters = {
    columnsAmount: 7,
    rowsAmount:7
}

////////////////////////
let gridArray = [];
const gridSize = gameParameters.columnsAmount * gameParameters.rowsAmount;

for (let i = 0; i < gridSize; i++) {
    gridArray.push(null);
}
export { gridArray };

////////////////
const player1 = {
    symbol: 'x',
    color: "green",
    name: 'player 1'
}
const player2 = {
    symbol: 'o',
    color: 'blue',
    name: "player 2"
}
const player3 = {
    symbol: 's',
    color: 'orange',
    name: "player 3"
}
export const players = [player1, player2];