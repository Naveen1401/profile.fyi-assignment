const InventoryReducer = (state, action) => {
    switch (action.type) {
        case "setDisplayProduct":
            return { ...state, displayProduct: action.payload };
        case "addToCart":
            return { ...state, cartProduct: [{ ...action.payload, qty: 1 }, ...state.cartProduct] };
        case "removeToCart":
            return {
                ...state,
                cartProduct: state.cartProduct.filter((p) => p.id !== action.payload.id)
            };
        case "changeQuantity":
            return {
                ...state,
                cartProduct: state.cartProduct.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.updatedQuantity) : c.qty
                )
            };
        case "removeFromCart":
            return {
                ...state,
                cartProduct: state.cartProduct.filter((p) => p.id === action.payload ? p.qty = 0 : p.qty)
            }
        case "clearTheCart":
            return {
                ...state,
                cartProduct: []
            }
        default:
            break
    };
};

export default InventoryReducer