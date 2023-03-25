import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import trendinglist from "../Trending";
import Productdata from "../ProductData";

const Cart = createContext();

const Context = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, {
        products: Productdata, 
        cart: [],
        wishlist: []
    }) 

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}