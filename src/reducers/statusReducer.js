import {UPDATE_USER_FAIL, FETCH_USER_FAIL, FETCH_PRODUCTS_FAIL, FETCH_CART_AND_PRODUCTS_FAIL,
UPDATE_USER} from "../actions/actionConstants";

export default (state=[], action) => {
    switch(action.type){
        case FETCH_PRODUCTS_FAIL:
        case UPDATE_USER_FAIL:
        case FETCH_USER_FAIL:
        case FETCH_CART_AND_PRODUCTS_FAIL:
        case UPDATE_USER:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
};