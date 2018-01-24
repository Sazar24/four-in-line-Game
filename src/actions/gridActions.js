import { reduxStore } from "../reducers/index";


export function columnClicked(index) 
{
    reduxStore.dispatch({ type: 'COLUMN_CLICKED', payload: index });
}