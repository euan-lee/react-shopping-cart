import { ReactElement } from "react";

const Button = ({ children }: ReactElement) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default Button;
