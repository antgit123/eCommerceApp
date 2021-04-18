import {FETCH_CART_AND_PRODUCTS, FETCH_CART, UPDATE_CART} from '../actions/actionConstants';

export default (state=[],action) => {
    switch(action.type){
        case FETCH_CART:
        case UPDATE_CART:
            return {
                ...state,
                cart: action.payload
            };
        case FETCH_CART_AND_PRODUCTS:
            return {
                ...state,
                cart: action.payload[0],
                products: action.payload[1]
            };
        default:
            return state;
    }
};