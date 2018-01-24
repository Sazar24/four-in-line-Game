import { gameParameters, gridArray } from "../consts/gameParameters";
import { determineWhichColumnIsIt, findLowestEmptySlotIDinColumn } from "../functions/gridCheck";

let newGameParameters = { gameParameters }

const defaultState = {
    gameParameters: newGameParameters,
    gameModel: gridArray
}

export const gridReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "COLUMN_CLICKED":
            console.log('id ', action.payload);
            const columnClicked = determineWhichColumnIsIt(action.payload, state.gameParameters.gameParameters);
            const lowestEmptySlotID = findLowestEmptySlotIDinColumn(columnClicked, state.gameParameters.gameParameters, state.gameModel);

            const newGridArray = state.gameModel.slice();
            newGridArray[lowestEmptySlotID] = 'x';

            return { ...state, gameModel: newGridArray };


        default:
            return state;
    }
}
