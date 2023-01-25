import React from "react";

type Props = {
  placeholder: string
} & React.ComponentProps<"input">;

const Input = (props: Props) => {
  return (
    <>
      <input placeholder={props.placeholder}/>
    </>
  );
};

export default Input;
