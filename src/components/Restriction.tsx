import React from "react";

//  split the type  and use never type for remaining others with optional chaining

type RandomValueProp = {
  value: number;
};

type PositiveProp = RandomValueProp & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeProp = RandomValueProp & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type ZeroProp = RandomValueProp & {
  isZero: boolean;
  isPositive: never;
  isNegative?: never;
};

type RandomPropsType = PositiveProp | NegativeProp | ZeroProp;

/* type RandomPropsType = {
  value: number;
  isPositive: boolean;
  isNegative: boolean;
  isZero: boolean;
}; */

const Restriction = (props: RandomPropsType) => {
  return (
    <>
      <h4>Restriction prop concept</h4>
      {props.value} {props.isPositive && "Positive"}{" "}
      {props.isNegative && "Negative"} {props.isZero && "Zero"}
    </>
  );
};

export default Restriction;
