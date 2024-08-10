import { ReactElement, createContext, useState } from "react";
import { CartItemWithCheck } from "../Types/types";

interface CartContextType {
  CartItems: CartItemWithCheck[];
  AddCart: (item: CartItemWithCheck) => void;
  DeleteCart: (item: CartItemWithCheck) => void;
  UpdateCart: (item: CartItemWithCheck, quantity: number) => void;
}

export const CartContext = createContext<CartContextType>({
  CartItems: [],
  AddCart: (item: CartItemWithCheck) => {
    console.log(item);
  },
  DeleteCart: (item: CartItemWithCheck) => {
    console.log(item);
  },
  UpdateCart: (item: CartItemWithCheck, quantity: number) => {
    console.log(item, quantity);
  },
});

export const UseCart = (): [
  CartItemWithCheck[],
  (item: CartItemWithCheck) => void,
  (item: CartItemWithCheck) => void,
  (item: CartItemWithCheck, quantity: number) => void,
] => {
  const [CartItems, setCartItems] = useState<CartItemWithCheck[]>([]);

  const AddCart = (item: CartItemWithCheck) => {
    setCartItems([...CartItems, item]);
  };

  const DeleteCart = (item: CartItemWithCheck) => {
    setCartItems(
      CartItems.filter((Item: CartItemWithCheck) => Item.id !== item.id)
    );
  };

  const UpdateCart = (item: CartItemWithCheck, quantity: number) => {
    const itemIndex = CartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex === -1) {
      console.error("Item not found in cart");
      return;
    }

    const updatedCartItems = [...CartItems];
    updatedCartItems[itemIndex] = { ...item, quantity };

    setCartItems(updatedCartItems);
  };

  return [CartItems, AddCart, DeleteCart, UpdateCart];
};

export const CartStore = ({ children }: { children: ReactElement }) => {
  const [CartItems, AddCart, DeleteCart, UpdateCart] = UseCart();
  return (
    <CartContext.Provider
      value={{ CartItems, AddCart, DeleteCart, UpdateCart }}>
      {children}
    </CartContext.Provider>
  );
};
