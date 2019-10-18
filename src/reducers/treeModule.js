const initState = {
    fileTree: [],
    selectedModule: -1
};

const treeReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ON_FIRST_LOAD':
            return Object.assign({}, state, {
                fileTree: action.payload
            });
        case 'HOME':
            return null;
        case 'SELECT_MODULE':
            return Object.assign({}, state, {
                selectedModule: action.payload
            });
        default:
            return state;
    }
}

export default treeReducer;