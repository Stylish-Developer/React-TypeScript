import React, { useState } from "react";

interface Props {
  name: string;
  unreadMessageCount: number;
  isLoggedIn: boolean;
}
const Typing = (props: Props) => {
  const [logIn, setLogIn] = useState<boolean>(props.isLoggedIn);

  // console.log(logIn);
  return (
    <>
    <h4>Typing props</h4>
      {logIn ? (
        <p>
          Welcome {props.name}! you have {props.unreadMessageCount}unread
          message
        </p>
      ) : (
        <p> Welcome Guest</p>
      )}
      <button type="button" onClick={() => setLogIn(true)}>
        Login
      </button>
      <button type="button" onClick={() => setLogIn(false)}>
        Logout
      </button>
    </>
  );
};

export default Typing;
