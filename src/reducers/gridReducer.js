import { gameParameters, gridArray, players } from "../consts/gameParameters";
import { determineWhichColumnIsIt, findLowestEmptySlotIDinColumn } from "../functions/gridCheck";
import { findWinnerLine } from "../functions/winCheck";
// import { changeMessage } from "../actions/gridActions";

const defaultState = {
    gameConsts: { gameParameters },
    gameModel: gridArray,
    players: players,
    currentPlayerNr: 0,
    message: undefined,
}

export const gridReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "COLUMN_CLICKED":
            const columnClicked = determineWhichColumnIsIt(action.payload, state.gameConsts.gameParameters);
            const lowestEmptySlotID = findLowestEmptySlotIDinColumn(columnClicked, state.gameConsts.gameParameters, state.gameModel);
            const newGridArray = state.gameModel.slice();

            if (lowestEmptySlotID !== undefined)        //powtórzenie warunku z findLowestEmptySlotIDinColumn ?
                newGridArray[lowestEmptySlotID] = players[state.currentPlayerNr].symbol;

            let newMessage;
            if (findWinnerLine(lowestEmptySlotID, newGridArray, state.gameConsts.gameParameters)) {
                // console.log(players[state.currentPlayerNr].color, "has won!");
                newMessage = `The ${players[state.currentPlayerNr].color} has won!`;
            }
            return { ...state, gameModel: newGridArray, message: newMessage };

        case "CHANGE_PLAYER":
            let nextPlayerNr = state.currentPlayerNr + 1;
            if (nextPlayerNr > players.length - 1) nextPlayerNr = 0;
            //TODO: tu jakaś blokada, że jak kliknięcie w pełną kolumnę, to nie zmienia gracza

            return { ...state, currentPlayerNr: nextPlayerNr }

        // case "CHANGE_MESSAGE":
        //     return { ...state, message: action.payload }

        default:
            return state;
    }
}