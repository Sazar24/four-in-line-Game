import { determineWhichColumnIsIt } from "./gridCheck";
// const determineColumnNr = require ("./gridCheck");

const winningLength = 4;

export
function findWinnerLine(addedSlotId, gameGrid) {   // slot wasn't Clicked! it was added at the bottom of the gameGrid

    const symbol = gameGrid[addedSlotId];

    // ## variant: HORIZONTAL line  ##
    let checkStep = 1;
    let lineBuildToBeChecked = [];

    for (let i = -(winningLength - 1); i < winningLength; i++) {
        let slotIDToCheck = addedSlotId + checkStep * i;
        //TODO: tutaj dać sprawdzanie która to kolumna - dla checkSlotID
        // if różnica tegoTutaj.kolumna od poprzedniogo >1 then clear Tablicę.



        if (slotIDToCheck >= gameGrid.length) continue;
        if (slotIDToCheck < 0) continue;
        let thisColumn;

        if (gameGrid[slotIDToCheck] === symbol) {
            thisColumn = determineWhichColumnIsIt(slotIDToCheck, 7);
            lineBuildToBeChecked.push({ id: slotIDToCheck, value: symbol, column: thisColumn });
        }
        else {
            lineBuildToBeChecked = [];
        }
        if (lineBuildToBeChecked.length === winningLength) {
            //TODO: dispatch na podświetlenie (np border++, width--), żeby nie bawić się w rozróżnianie kolorków...;

            return true;
        }
    }
    return false;
}
// module.exports = findWinnerLine;
// export { findWinnerLine };