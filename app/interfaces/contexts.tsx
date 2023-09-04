type generalContextType = {
    isCardSide: boolean
    setCardSide: (view: boolean) => void
    isAlphabeticSort: boolean,
    setAlphabeticSort: (view: boolean) => void
    cart: Product[]
    addToCart: (product:any) => void;
    wishlist: number
    addToWishlist: (view: number) => void;

};