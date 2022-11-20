import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import SignInSignUp from "./SignInSignUp";

ReactDOM.render(
  <React.StrictMode>
    <SignInSignUp/>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
