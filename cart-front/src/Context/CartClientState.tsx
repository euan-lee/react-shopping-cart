import { ReactElement, createContext, useState } from "react";
import { CartItemWithCheck } from "../Types/types";

interface CartContextType {
  CartClientState: CartItemWithCheck[];
  AddCartClientState: (item: CartItemWithCheck) => void;
  DeleteCartClientState: (item: CartItemWithCheck) => void;
  UpdateCartClientStateNumber: (
    item: CartItemWithCheck,
    quantity: number
  ) => void;
  UpdateCartClientStateDone: (item: CartItemWithCheck) => void;
}

export const CartClientContext = createContext<CartContextType>({
  CartClientState: [],
  AddCartClientState: (item: CartItemWithCheck) => {
    console.log(item);
  },
  DeleteCartClientState: (item: CartItemWithCheck) => {
    console.log(item);
  },
  UpdateCartClientStateNumber: (item: CartItemWithCheck, quantity: number) => {
    console.log(item, quantity);
  },
  UpdateCartClientStateDone: (item: CartItemWithCheck) => {
    console.log(item);
  },
});

export const UseCartClientState = (
  initialCarts: CartItemWithCheck[]
): [
  CartItemWithCheck[],
  (item: CartItemWithCheck) => void,
  (item: CartItemWithCheck) => void,
  (item: CartItemWithCheck, quantity: number) => void,
  (item: CartItemWithCheck) => void,
] => {
  const [CartClientState, setCartItems] =
    useState<CartItemWithCheck[]>(initialCarts);

  const AddCartClientState = (item: CartItemWithCheck) => {
    setCartItems([...CartClientState, item]);
  };

  const UpdateCartClientStateNumber = (
    item: CartItemWithCheck,
    quantity: number
  ) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      if (itemIndex === -1) {
        console.error("Item not found in cart");
        return prevItems;
      }

      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: quantity,
      };

      return updatedItems;
    });
  };

  const UpdateCartClientStateDone = (item: CartItemWithCheck) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );

      if (itemIndex === -1) {
        console.error("Item not found in cart");
        return prevItems;
      }

      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        done: !updatedItems[itemIndex].done, // done 속성을 반전시킴
      };
      return updatedItems;
    });
  };

  const DeleteCartClientState = (item: CartItemWithCheck) => {
    setCartItems(
      CartClientState.filter((Item: CartItemWithCheck) => Item.id !== item.id)
    );
  };

  return [
    CartClientState,
    AddCartClientState,
    DeleteCartClientState,
    UpdateCartClientStateNumber,
    UpdateCartClientStateDone,
  ];
};

export const CartClientStateStore = ({
  children,
  initialCarts,
}: {
  children: ReactElement;
  initialCarts: CartItemWithCheck[];
}) => {
  const [
    CartClientState,
    AddCartClientState,
    DeleteCartClientState,
    UpdateCartClientStateNumber,
    UpdateCartClientStateDone,
  ] = UseCartClientState(initialCarts);
  return (
    <CartClientContext.Provider
      value={{
        CartClientState,
        AddCartClientState,
        DeleteCartClientState,
        UpdateCartClientStateNumber,
        UpdateCartClientStateDone,
      }}>
      {children}
    </CartClientContext.Provider>
  );
};
