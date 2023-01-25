import React from "react";
import toast, { Toaster } from "react-hot-toast";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position?:
    | string
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center"
    | undefined;
};

const Toast = (props: ToastProps) => {
  const { position } = props;

  const notify = () =>
    toast("I got your order", {
      icon: "👨‍🍳",
      position: "top-right",
    });

  return (
    <>
      <h4>
        This component explain the how to use template literals and exclude
        method concept in react typescript
      </h4>
      <div>
        <button onClick={() => notify()}>Make me a toast</button>
      </div>
      <Toaster reverseOrder={false} />
    </>
  );
};

export default Toast;
