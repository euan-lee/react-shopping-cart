import { HTMLAttributes } from "react";

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

const CardBody = ({ children, ...props }: CardBodyProps) => {
  return <div {...props}>{children}</div>;
};

export default CardBody;
