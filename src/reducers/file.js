const init = {
    files: [],
    selected: null
}
const fileReducer = (state = init, action) => {
    switch (action.type) {
        case 'SELECT_FILE':
            const newfile = action.payload
            const exists = state.files.some(file => file.id === newfile.id);
            return Object.assign({}, state, {
                files: !exists ? [...state.files, action.payload] : state.files,
                selected: action.payload.id
            });
        case 'REMOVE_FILE':
            const newFiles = state.files.filter(file => file.id !== action.payload.id);
            return Object.assign({}, state, {
                files: [...newFiles],
                selected: state.selected === action.payload.id ? (newFiles.length !== 0 ? newFiles[0].id : null) : state.selected
            })
        default:
            return state;
    }
};

export default fileReducer;