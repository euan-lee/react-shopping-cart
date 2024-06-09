import { HTMLAttributes } from "react";

interface FlexItemkProps extends HTMLAttributes<HTMLDivElement> {}

const Stack = ({ children, ...props }: FlexItemkProps) => {
  return <div {...props}>{children}</div>;
};

export default Stack;
