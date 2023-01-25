import React, { CSSProperties } from "react";

// This component tells the style props concept in react typescript

interface Props {
    styles: CSSProperties
}
const StylesProps = (props: Props) => {
  return (
    <>
      <h4>Styles Props concept</h4>
      <div
        style={props.styles}
      ></div>
    </>
  );
};

export default StylesProps;
