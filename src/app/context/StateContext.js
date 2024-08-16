"use client"

import React, { createContext, useReducer, useContext } from 'react';
import InventoryReducer from "../Reducers/InventoryReducer";

const StateContext = createContext();

export function StateProvider({ children }) {
    const [state, dispatch] = useReducer(InventoryReducer, {
        displayProduct: [],
        cartProduct: []
    });
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
}

export function useStateContext() {
    return useContext(StateContext);
}