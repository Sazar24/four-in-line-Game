import { gameParameters, gridArray, players } from "../consts/gameParameters";
import { determineWhichColumnIsIt, findLowestEmptySlotIDinColumn } from "../functions/gridCheck";

const defaultState = {
    gameConsts: { gameParameters },
    gameModel: gridArray,
    currentPlayerNr: 0,
    currentPlayer: players[0]
}

export const gridReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "COLUMN_CLICKED":
            const columnClicked = determineWhichColumnIsIt(action.payload, state.gameConsts.gameParameters);
            const lowestEmptySlotID = findLowestEmptySlotIDinColumn(columnClicked, state.gameConsts.gameParameters, state.gameModel);
            const newGridArray = state.gameModel.slice();

            if (lowestEmptySlotID !== undefined)
                newGridArray[lowestEmptySlotID] = players[state.currentPlayerNr].symbol;
            // newGridArray[lowestEmptySlotID] = 'x';

            return { ...state, gameModel: newGridArray };

        case "CHANGE_PLAYER":
            let nextPlayerNr = state.currentPlayerNr + 1;
            if (nextPlayerNr > players.length - 1) nextPlayerNr = 0;


            return { ...state, currentPlayerNr: nextPlayerNr, currentPlayer: players[nextPlayerNr] }

        default:
            return state;
    }
}