// index.js or AppWrapper.js
import React from "react";
import ReactDOM from "react-dom";
import UserAuthContext from "./pages/UserAuthContext";
import App from "./App";

ReactDOM.render(
  <UserAuthContext>
    <App />
  </UserAuthContext>,
  document.getElementById("root")
);
