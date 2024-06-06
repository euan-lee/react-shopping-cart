import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};

export default Card;
