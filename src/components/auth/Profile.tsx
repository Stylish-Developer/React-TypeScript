import React from "react";

export interface ProfileProps {
  message: string;
}
const Profile = (props: ProfileProps) => {
  return (
    <>
      <h2>Component Prop concept</h2>
      <h4>Profile Page</h4>
      <p>{props.message}</p>
    </>
  );
};

export default Profile;
