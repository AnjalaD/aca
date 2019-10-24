// export const inc = (num = 1) => {
//     return {
//         type: 'INCREMENT',
//         payload: num
//     }
// }

// export const dec = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

export const home = () => ({
    type: 'HOME'
});


export const selectModule = (id = -1) => ({
    type: 'SELECT_MODULE',
    payload: id
});

export const onFirstLoad = (tree = []) => ({
    type: 'ON_FIRST_LOAD',
    payload: tree
});

export const searchFile = (fileName = '') => ({
    type: 'SEARCH_FILE',
    payload: fileName
});

export const selectFile = (file = null) => ({
    type: 'SELECT_FILE',
    payload: file
});

export const removeFile = (file) => ({
    type: 'REMOVE_FILE',
    payload: file
});