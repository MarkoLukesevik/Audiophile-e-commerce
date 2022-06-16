import React, { createContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ALL_PRODUCTS_FROM_BASKET,
  LOCAL_STORAGE,
} from "./constants.js";

const CART_DATA = {
  basket: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let existingProduct = state.basket.find(
        (product) => product.id === payload.id
      );

      if (!existingProduct) {
        return { ...state, basket: [...state.basket, { ...payload }] };
      }

      existingProduct.quantity += 1;
      return { ...state, basket: [...state.basket] };

    case INCREASE_QUANTITY:
      let productInCart = state.basket.find(
        (product) => product.id === payload
      );
      productInCart.quantity++;
      return { ...state, basket: [...state.basket] };

    case DECREASE_QUANTITY:
      let productToDecrease = state.basket.find(
        (product) => product.id === payload
      );
      let removeBasketProduct = state.basket.filter(
        (product) => product.id !== payload
      );

      if (productToDecrease.quantity === 1) {
        return { ...state, basket: [...removeBasketProduct] };
      }

      productToDecrease.quantity--;
      return { ...state, basket: [...state.basket] };

    case REMOVE_ALL_PRODUCTS_FROM_BASKET:
      return { ...state, basket: [] };

    case LOCAL_STORAGE:
      return { ...state, basket: [...payload] };
  }
};

export const CartContext = createContext(CART_DATA);

export function CartProvider({ children }) {
  const [cartData, dispatch] = useReducer(reducer, CART_DATA);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket"));
    if (data) {
      dispatch({ type: LOCAL_STORAGE, payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(cartData.basket));
  }, [cartData.basket]);
  return (
    <CartContext.Provider value={{ ...cartData, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
