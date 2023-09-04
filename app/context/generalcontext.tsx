"use client"
import { ReactNode, createContext, useContext, useState } from "react";

const generalContextDefaultValues: generalContextType = {
    isCardSide: false,
    setCardSide: () => { },
    isAlphabeticSort: true,
    setAlphabeticSort: () => { },
    cart: [],
    addToCart: () => { },
    wishlist: 0,
    addToWishlist: () => { },

};

const GeneralContext = createContext<generalContextType>(generalContextDefaultValues);

export function useGeneral() {
    return useContext(GeneralContext);
}

type Props = {
    children: ReactNode;
};

export function GeneralProvider({ children }: Props) {
    const [isCardSide, setCardSide] = useState(false);
    const [isAlphabeticSort, setAlphabeticSort] = useState(true);
    const [cart, addToCart] = useState([]);
    const [wishlist, addToWishlist] = useState(0);

    return (
        <GeneralContext.Provider value={{
            isCardSide, setCardSide, isAlphabeticSort, setAlphabeticSort, cart, addToCart, wishlist, addToWishlist
        }}>
            {children}
        </GeneralContext.Provider>
    );
}