import { determineWhichColumnIsIt } from "./gridCheck";
// const determineColumnNr = require ("./gridCheck");




export function findWinnerLine(addedSlotId, gameGrid, gridParams) {
    let isItWinner;

    let checkStep = 1; //horizonal line
    isItWinner = checkLines(addedSlotId, gameGrid, gridParams, checkStep);
    if (isItWinner) { return true; }

    checkStep = gridParams.columnsAmount; //vertical line
    isItWinner = checkLines(addedSlotId, gameGrid, gridParams, checkStep);
    if (isItWinner) { return true; }

    checkStep = gridParams.columnsAmount + 1; //diagonal line 1 = '/'
    isItWinner = checkLines(addedSlotId, gameGrid, gridParams, checkStep);
    if (isItWinner) { return true; }

    checkStep = gridParams.columnsAmount - 1; //diagonal line 2 = '\'
    isItWinner = checkLines(addedSlotId, gameGrid, gridParams, checkStep);
    if (isItWinner) { return true; }

}

const winningLength = 4;

function checkLines(addedSlotId, gameGrid, gridParams, checkStep) {   // slot wasn't Clicked! it was added at the bottom of the gameGrid



    const symbol = gameGrid[addedSlotId];
    let lineToCheck = [];

    for (let i = -(winningLength - 1); i < winningLength; i++) {

        let slotIDToCheck = addedSlotId + checkStep * i;

        if (slotIDToCheck >= gameGrid.length) continue;
        if (slotIDToCheck < 0) continue;
        let thisColumn;

        if (gameGrid[slotIDToCheck] === symbol) {
            thisColumn = determineWhichColumnIsIt(slotIDToCheck, gridParams);
            lineToCheck.push({ id: slotIDToCheck, value: symbol, column: thisColumn });
        }
        else {
            lineToCheck = [];
        }

        if (lineToCheck.length > 1) {
            const length = lineToCheck.length;
            const thisSlot = lineToCheck[length - 1];
            const slotBeforeThisSlot = lineToCheck[length - 2];

            if (Math.abs(thisSlot.column - slotBeforeThisSlot.column) > 1) {
                lineToCheck = [];
                continue;
            }
        }

        if (lineToCheck.length === winningLength) {
            //TODO: dispatch na podświetlenie (np border++, width--), żeby nie bawić się w rozróżnianie kolorków...;
            console.log("winning Line is:", JSON.stringify(lineToCheck));

            return true;
        }
    }
    return false;
}
// module.exports = findWinnerLine;
// export { findWinnerLine };