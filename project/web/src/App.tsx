import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import SignOut from './components/signOut/SignOut';

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const [user, setUser] = useState<string | undefined>("");

  function RenderUserName() {
    const { accounts } = useMsal();
    try {
      const userName = accounts[0].name;
      setUser(userName);
    } catch (e) {}
  }

  if (user != "")
    return (
      <div>
        <div className="welcome">
          <div>Welcome: {user}</div>
        </div>
        <div>
        <SignOut></SignOut>
        </div>
      </div>
    );
  else
    return (
      <>
        {RenderUserName()}
        <div>Please wait...</div>
      </>
    );
}

export default App;
