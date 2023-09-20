import React from "react";
import "./SignOut.css";
import { useMsal } from "@azure/msal-react";

const SignOut = () => {
  const { instance } = useMsal();

  const handleSignOut = () =>{
    instance.logout();
  }

  return (
    <img
      className="sign-out"
      src="./signout-icon-4.jpg"
      alt="Sign Out"
      title="Sign Out"
      onClick={handleSignOut}
    ></img>
  );
};

export default SignOut;
