import React from "react";

//This component explain the conditional rendering concept in react typescript

interface Props {
  status: string; // this type is will not throw the error but with any string value we can achieve this so this is bug here to avoid this use union method
}

const BegAdvProp1 = (props: Props) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "No Error in data fetching";
  } else if (props.status === "welcome") {
    message = "Welcome gowtham";
  } else {
    message = "";
  }
  return (
    <>
      <h4>
      This component explain the conditional rendering concept in react typescript
      </h4>
      <h2>{message}</h2>
    </>
  );
};

export default BegAdvProp1;
