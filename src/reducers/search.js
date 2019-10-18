const initState = -1;

const searchFileReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'SEARCH_FILE':
            // console.log('search', action);
            return state = action.payload;
        default:
            return state;
    }
}

export default searchFileReducer;