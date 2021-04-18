import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';
import cartReducer from './cartReducer';
import statusReducer from './statusReducer';

export default combineReducers({
    products: productsReducer,
    user: usersReducer,
    cart: cartReducer,
    status: statusReducer
});