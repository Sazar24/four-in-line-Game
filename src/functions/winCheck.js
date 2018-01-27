const winningLength = 4;

export function findWinnerLine(addedSlotId, gameGrid) {   // slot wasn't Clicked! it was added at the bottom of the gameGrid

    const symbol = gameGrid[addedSlotId];
    console.log('symbol we are looking for now is: ', symbol);
    
    //variant: HORIZONTAL line
    let checkStep = 1;
    let lineBuildToBeChecked = [];

    for (let i = -(winningLength - 1); i < winningLength - 1; i++) {
        let checkSlotID = addedSlotId + checkStep * i;
        if (gameGrid[checkSlotID] === symbol)
            lineBuildToBeChecked.push({id: checkSlotID, value: symbol });
        else {
            lineBuildToBeChecked = [];
        }
        if (lineBuildToBeChecked.length === winningLength){
            //TODO: test czy na pewno...;
            //TODO: dispatch na podświetlenie (np border++, width--), żeby nie bawić się w rozróżnianie kolorków...;

            console.log('the winner is found! ', symbol, lineBuildToBeChecked);
            return true;
            

        }


    }


}