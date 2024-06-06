import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};

export default Card;
