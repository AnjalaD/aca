const init = {
    files: [],
    selected: null,
    comments: null,
    links: null
}
const fileReducer = (state = init, action) => {
    switch (action.type) {
        case 'SELECT_FILE':
            const newfile = action.payload
            const exists = state.files.some(file => file.id === newfile.id);
            return Object.assign({}, state, {
                files: !exists ? [...state.files, action.payload] : state.files,
                selected: action.payload.id,
                comments: null,
                links: null,
            });
        case 'REMOVE_FILE':
            const newFiles = state.files.filter(file => file.id !== action.payload.id);
            return Object.assign({}, state, {
                files: [...newFiles],
                selected: state.selected === action.payload.id ? (newFiles.length !== 0 ? newFiles[0].id : null) : state.selected,
                comments: state.selected === action.payload.id ? null : state.comments,
                links: state.selected === action.payload.id ? null : state.links
            });
        case 'ADD_COMMENTS':
            return Object.assign({}, state, {
                comments: action.payload
            });
        case 'ADD_LINKS':
            return Object.assign({}, state, {
                links: action.payload
            });
        default:
            return state;
    }
};

export default fileReducer;