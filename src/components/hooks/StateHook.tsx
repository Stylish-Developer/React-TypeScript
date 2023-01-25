import React, { useState } from "react";

// --> This component covered useState hook , useState future value,useState hook type assertion concept

interface Props {
    name:  string,
    status: string
}
const StateHook = () => {
  const [user, setUser] = useState<Props | null>(null);
//   const [user, setUser] = useState<Props>({} as Props);         // type assertion concept
  const [signedIn,setSignedIn] = useState<boolean>(false);

  const handleSignIn = () => {
    setUser({
        name: 'gowtham',
        status: 'signedIn successfully'
    })
    setSignedIn(true)
  }
  const handleSignOut = () => {
    setUser(null);
    setSignedIn(false);
  }
  return (
    <>
      <h4>concept of writing state hook in typescript</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <button onClick={handleSignIn}>signIn</button>
        <button onClick={handleSignOut}>signOut</button>
      </div>
     { signedIn ?  <h1>{`${user?.name} you are ${user?.status}`}</h1> : null }
     {/* { signedIn ?  <h1>{`${user.name} you are ${user.status}`}</h1> : null } */}
    </>
  );
};

export default StateHook;
