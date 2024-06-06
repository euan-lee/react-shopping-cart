import { HTMLAttributes } from "react";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <div {...props}>{children}</div>;
};

export default CardHeader;
