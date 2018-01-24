import { gameParameters, gridArray } from "../consts/gameParameters";
import { determineWhichColumnIsIt, findLowestEmptySlotIDinColumn } from "../functions/gridCheck";

const defaultState = {
    gameConsts: {gameParameters},
    gameModel: gridArray
}

export const gridReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "COLUMN_CLICKED":
            const columnClicked = determineWhichColumnIsIt(action.payload, state.gameConsts.gameParameters);
            const lowestEmptySlotID = findLowestEmptySlotIDinColumn(columnClicked, state.gameConsts.gameParameters, state.gameModel);
            const newGridArray = state.gameModel.slice();

            if (lowestEmptySlotID !== undefined)
                newGridArray[lowestEmptySlotID] = 'x';

            return { ...state, gameModel: newGridArray };

        default:
            return state;
    }
}