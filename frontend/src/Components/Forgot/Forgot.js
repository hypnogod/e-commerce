import React from "react";
import Nav from "../Nav/LoginNav/Backupnav";
import { TextField, Button } from "@material-ui/core";
import "./Fptgot.css";
export default function Forgot() {
    
  const forgotSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Nav />
      <div className="forgot_container">
        <div className="forgotBox">
          <h1>Forgot Password</h1>
          <form onSubmit={forgotSubmit} className="forgotForm">
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              //   onChange={onChangeInput}
            />
            <br></br>
            <Button variant="contained" type="submit" >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
