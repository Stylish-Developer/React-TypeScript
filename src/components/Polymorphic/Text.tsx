import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size: "sm" | "md" | "lg";
  color: "red" | "green" | "blue";
  children: React.ReactNode;
  as?: E;
};

type Props<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">(props: Props<E>) => {
  const { as } = props;
  const Component = as || "div";
  return (
    <Component className={`cls-with-${props.size}-${props.color}`}>
      {props.children}
    </Component>
  );
};

export default Text;
