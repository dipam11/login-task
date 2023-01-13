import React from "react";
import "./App.css";
import Login from "./component/login";
import login from "./asset/login.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={login} alt="logo" />
      </div>
      <div className="container">
        <Login />
      </div>
    </div>
  );
}

export default App;
