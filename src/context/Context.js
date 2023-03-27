import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";
import trendinglist from "../Trending";
import Productdata from "../ProductData";

const Cart = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: Productdata, 
        cart: [],
        wishlist: []
    }) 

    const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: ""
    })

    return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}