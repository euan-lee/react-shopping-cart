import CartSvg from "../..//Svg/CartIcon.svg";
import { postCarts } from "../../Apis/api";
import { Product } from "../../Types/types";
import { useMutation } from "@tanstack/react-query";

export const CartIcon = ({ id, name, price, imageUrl }: Product) => {
  const CartMutation = useMutation({
    mutationFn: ({ id, name, price, imageUrl }: Product) =>
      postCarts({ id, name, price, imageUrl }),
  });

  return (
    <CartSvg
      width="20px"
      height="20px"
      onClick={() => {
        CartMutation.mutate({ id, name, price, imageUrl });
      }}
    />
  );
};
