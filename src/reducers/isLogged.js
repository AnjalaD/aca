const isLoggedReducer = (state = false, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return false;
    }
};

export default isLoggedReducer