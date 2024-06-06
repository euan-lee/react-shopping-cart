import { HTMLAttributes } from "react";

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = ({ children, ...props }: CardFooterProps) => {
  return <div {...props}>{children}</div>;
};

export default CardFooter;
