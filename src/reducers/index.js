// import counterReducer from './counter';
// import isLoggedReducer from './isLogged';
import treeReducer from './treeModule';
import { combineReducers } from 'redux';
import searchFileReducer from './search';

const allReducers = combineReducers({
    // counter: counterReducer,
    // logged: isLoggedReducer,
    tree: treeReducer,
    searchFile: searchFileReducer,
})

export default allReducers