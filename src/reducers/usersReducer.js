export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_USER':
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};