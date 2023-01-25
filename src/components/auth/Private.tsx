import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

interface Props {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; // Here is the trick
}
const Private = ({ isLoggedIn, component: Component }: Props) => {
  if (isLoggedIn) {
    return <Component message="Hello World!" />;
  } else {
    return <Login />;
  }
};

export default Private;
