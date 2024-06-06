import { HTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  flag: boolean;
}

const Checkbox = ({ children, flag, ...props }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" disabled={flag} {...props} />
      {children}
    </label>
  );
};
export default Checkbox;
