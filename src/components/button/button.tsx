import { ButtonHTMLAttributes, FC } from "react";
import "./button.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, ...restProps }) => (
  <button className="custom-button" {...restProps}>
    {children}
  </button>
);

export default Button;
