import {CART_URL, PRODUCTS_URL} from "../api/constants";
import { FETCH_CART,FETCH_CART_AND_PRODUCTS } from "./actionConstants";

export const fetchCart = (userId) => async dispatch  => {
    try{
        const cart = await fetch(CART_URL + userId,{});
        cart.json().then(data =>{
            dispatch({type: FETCH_CART, payload: data});
        });
    }catch(e){
        console.log(e);
    }
};

export const fetchCartAndProducts = (userId) => async dispatch =>{
    Promise.all([
        fetch(CART_URL+ userId),
        fetch(PRODUCTS_URL)
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        const cartAndProducts = Promise.all(responses.map(function (response) {
            return response.json();
        }));
        cartAndProducts.then((cartAndProductData) =>{
            dispatch({type: FETCH_CART_AND_PRODUCTS,payload: cartAndProductData});
        });
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

};

