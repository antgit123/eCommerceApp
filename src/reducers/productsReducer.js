import { FETCH_PRODUCTS, SORT_PRODUCTS, SEARCH_PRODUCTS, FILTER_PRODUCTS} from "../actions/actionConstants";

export default (state=[],action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
        case SORT_PRODUCTS:
        case SEARCH_PRODUCTS:
        case FILTER_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};