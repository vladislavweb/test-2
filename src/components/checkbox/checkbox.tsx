import { FC, HTMLProps, ReactNode } from "react";
import "./checkbox.scss";

interface Props extends HTMLProps<HTMLInputElement> {
  leftLabel?: string;
  rightLabel?: ReactNode;
}

const Checkbox: FC<Props> = ({ leftLabel, rightLabel, ...restProps }) => (
  <div className="custom-checkbox">
    <label className="custom-checkbox__label-wrapper" htmlFor={restProps.id}>
      <span className="custom-checkbox__left-label">{leftLabel}</span>

      <input className="custom-checkbox__input" {...restProps} type="checkbox" />

      <span className="custom-checkbox__right-label">{rightLabel}</span>
    </label>
  </div>
);

export default Checkbox;
