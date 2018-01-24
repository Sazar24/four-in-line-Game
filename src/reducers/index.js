import { combineReducers, createStore } from 'redux';
import { gridReducer } from './gridReducer.js';


const reducers = combineReducers({
    gridReducer
})

export const reduxStore = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default reduxStore;

// reduxStore.subscribe(() => {
//     console.log("store changed:", reduxStore.getState())
// });