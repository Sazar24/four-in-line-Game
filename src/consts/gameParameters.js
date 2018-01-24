export const gameParameters = { // zmienić nazwę na coś w rodzaju gameConsts
    columnsAmount: 5,
    rowsAmount: 4
}


let gridArray = [];
const gridSize = gameParameters.columnsAmount * gameParameters.rowsAmount;

for (let i = 0; i < gridSize; i++) {
    gridArray.push(null);
}

export {gridArray};