export function determineWhichColumnIsIt(id, gridParams) {
    let columnNr;
    columnNr = id % gridParams.columnsAmount;

    return columnNr;
}

export function findLowestEmptySlotIDinColumn(columnNr, gridParams, _gridArray) {

    for (let rowNr = gridParams.rowsAmount - 1; rowNr >= 0; rowNr--) {
        let id = rowNr * gridParams.columnsAmount + columnNr;
        if (_gridArray[id] === null) {
            // console.log(`In ${columnNr}. column  lowest empty slot id is: ${id}`);
            return id;
        }
    }
    console.log(`Column ${columnNr} is already filled!!`);
}

