import { reduxStore } from "../reducers/index";


export function columnClicked(index) 
{
    reduxStore.dispatch({ type: 'COLUMN_CLICKED', payload: index });
}

export function changePlayer() 
{
    reduxStore.dispatch({ type: 'CHANGE_PLAYER' });
}