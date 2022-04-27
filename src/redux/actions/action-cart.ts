import { Book, AddToCart, RemoveFromCart, clearCart } from "../../Types";

export function addToCart(book: Book): AddToCart {
  return {
    type: "ADD_TO_CART",
    payload: { book },
  };
}

// To remove a country from Cart
export function removeFromCart(item: Book): RemoveFromCart {
  return {
    type: "REMOVE_FROM_CART",
    payload: { item },
  };
}

export function ClearCart(): clearCart {
  return {
    type: "CLEAR_CART",
  };
}
