import React,{ ReactNode } from "react";

//This component explain the how to pass a react component as a children component concept in react typescript

interface Props {
  children: ReactNode

}
const BegAdvProp3 = (props: Props) => {
  return (
    <>
      <h4>
      This component explain the how to pass a react component as a children component concept
      </h4>
      <p>{props.children}</p>
    </>
  );
};

export default BegAdvProp3;
