// import counterReducer from './counter';
// import isLoggedReducer from './isLogged';
import treeReducer from './moduleTree';
import { combineReducers } from 'redux';
import searchFileReducer from './search';
import fileReducer from './file';

const allReducers = combineReducers({
    // counter: counterReducer,
    // logged: isLoggedReducer,
    tree: treeReducer,
    searchFile: searchFileReducer,
    file: fileReducer,
})

export default allReducers