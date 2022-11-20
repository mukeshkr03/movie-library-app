import React, { useEffect, useState } from "react";
import App from "./App";
import "./SignInSignUp.css";

function SignInSignUp() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);

  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localName = localStorage.getItem("name");
  const localPassword = localStorage.getItem("password");


  console.log(localSignUp);
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleClick = () => {
    if (name && email && password) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("signUp", email);
      alert("Account created successfully!!!");
      window.location.reload();
    }
  };
  const handleSignIn = () => {
    if(email == localEmail  && password == localPassword){
        localStorage.setItem("signUp", email);
        window.location.reload();
    }
    else{
        alert('Enter valid Email-Id and Password')
    }
  }
  return (
    <div>
      {showHome ? (
        <App />
      ) : show ? (
        <div className="container">
        <h2 style = {{marginTop: "130px"}}>Movie App</h2>
          <div className="input__space">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="input__space">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input__space">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button style = {{borderBottom: "1px solid gray" , cursor: "pointer"}} onClick={handleClick}>Sign Up</button><br></br>
          <button style = {{cursor: "pointer"}} onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <div className="container">
        <h2 style = {{marginTop: "130px"}}>Movie App</h2>
          <div className="input__space">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="input__space">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input__space">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button style = {{cursor: "pointer"}} onClick={handleClick}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default SignInSignUp;
