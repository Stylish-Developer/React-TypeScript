import React from "react";

export interface Props {
  devDetails: {
    name: string;
    job: string;
    location: string;
  };
}

const BProp = (props: Props) => {
  return (
    <>
      <h4>Basic props - object</h4>
      <p>Developer Details</p>
      <p>Name: {props.devDetails.name}</p>
      <p>Jon: {props.devDetails.job}</p>
      <p>Location: {props.devDetails.location}</p>
    </>
  );
};

export default BProp;
