import React from "react";
import BProp from "../BProp";
// Extracting a components prop from BProp1.tsx file

const ExtractCPropTyp = (props: React.ComponentProps<typeof BProp>) => {
  return (
    <>
      <div>ExtractCPropTyp concept</div>;<h4>Basic props - object</h4>
      <p>Developer Details</p>
      <p>Name: {props.devDetails.name}</p>
      <p>Jon: {props.devDetails.job}</p>
      <p>Location: {props.devDetails.location}</p>
    </>
  );
};

export default ExtractCPropTyp;
