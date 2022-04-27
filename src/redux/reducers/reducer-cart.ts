import { AllActions, CartState } from "../../Types";

const initialState: CartState = {
  cart: [],
};
export default function cartReducer(state = initialState, action: AllActions) {
  switch (action.type) {
    // Adding countries to cart
    case "ADD_TO_CART":
      const { book } = action.payload;
      return {
        ...state,
        cart: [...state.cart, book],
      };

    // Removing country from cart
    case "REMOVE_FROM_CART":
      let newCart = state.cart.filter((item) => item !== action.payload.item);
      return {
        ...state,
        cart: newCart,
      };

    // Removing country from cart
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
