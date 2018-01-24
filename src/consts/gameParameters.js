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