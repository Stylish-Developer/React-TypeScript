import React from "react";

//This component explain the how to pass children component with text concept in react typescript

interface Props {
  children: string;
}

const BegAdvProp2 = (props: Props) => {
  return (
    <>
      <h4>
        This component explain the how to pass children component with text in
        react typescript
      </h4>
      <p>{props.children}</p>
    </>
  );
};

export default BegAdvProp2;
