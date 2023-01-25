import React, { ReactNode } from "react";

//This component explain optional type concept in react typescript

interface Props {
  devDetails: {
    name: string;
    job: string;
    location: string;
    email?: string // this is called optional rendering
  };
}

const BegAdvProp4 = (props: Props) => {
  return (
    <>
      <h4>This component explain optional type concept in react typescript</h4>
      <p>Developer Details</p>
      <p>Name: {props.devDetails.name}</p>
      <p>Jon: {props.devDetails.job}</p>
      <p>Location: {props.devDetails.location}</p>
    </>
  );
};

export default BegAdvProp4;
