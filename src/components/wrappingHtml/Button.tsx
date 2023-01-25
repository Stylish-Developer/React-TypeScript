import React from "react";
import "./Bstyle.css";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = (props: Props) => {
  const { variant, children } = props;
  return (
    <>
      <h4>Wrapping Html concept</h4>
      <button className={`btn-style-${variant}`}>{children}</button>
    </>
  );
};

export default Button;
