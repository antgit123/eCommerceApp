import { PRODUCTS_URL, FILTER_PRODUCTS_URL } from '../api/constants';
import { FETCH_PRODUCTS,SORT_PRODUCTS, SEARCH_PRODUCTS, FILTER_PRODUCTS } from "./actionConstants";

export const fetchProducts = () => async dispatch  => {
    try{
        const products = await fetch(PRODUCTS_URL,{});
        products.json().then(data =>{
            console.log("Data" + data);
            dispatch({type: FETCH_PRODUCTS, payload: data});
        });
    }catch(e){
        // dispatch({
        //     type: GET_DOCUMENT_FAIL
        // });
    }
};

const compareProducts = (key,sortKey="asc") =>{
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const propertyValueA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const propertyValueB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (propertyValueA > propertyValueB) {
            comparison = 1;
        } else if (propertyValueA < propertyValueB) {
            comparison = -1;
        }
        return (
            (sortKey === 'desc') ? (comparison * -1) : comparison
        );
    };
};

export const sortProducts = (productsList,sortKey) => dispatch  => {
    const products = productsList.products;
    if(products && products.length > 0){
        const updatedProductsList = products.sort(compareProducts("price",sortKey));
        dispatch({type: SORT_PRODUCTS , payload: updatedProductsList});
    }
};

export const searchProducts = (searchKey) => async dispatch  => {
    try{
        const products = await fetch(PRODUCTS_URL,{});
        products.json().then(products =>{
            const filteredProductList = products.filter(product =>{
                return product.title.toLowerCase().indexOf(searchKey.toLowerCase().trim()) !== -1;
            });
            dispatch({type: SEARCH_PRODUCTS, payload: filteredProductList});
        });
    }catch(e){
        console.log(e);
    }
};

export const filterProducts = (filterCategory) => async dispatch  => {
    try{
        const products = await fetch(FILTER_PRODUCTS_URL+ filterCategory,{});
        products.json().then(products =>{
            dispatch({type: FILTER_PRODUCTS, payload: products});
        });
    }catch(e){
        console.log(e);
    }
};