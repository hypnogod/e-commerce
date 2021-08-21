import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

import { useDispatch, useSelector } from "react-redux";
import LoginNav from "../Nav/LoginNav/Backupnav";
import { signin } from "../../Redux/Action/Users/session-login";
import { useHistory, useLocation } from "react-router";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";

function Login(props) {
  const location = useLocation();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(signin(user.email, user.password));
  };
  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // console.log(userInfo);
  return (
    <>
      {userSignIn.loading ? (
        <Backdrop
          open={true}
          onClick={null}
          style={{ zIndex: "200", backgroundColor: "rgb(0 0 0 / 76%)" }}
        >
          <CircularProgress />
        </Backdrop>
      ) : null}
      {userInfo ? null : (
        <div className="login">
          <LoginNav titleLocation={"login"} />
          <div className="login_container">
            <div className="login_box">
              <h1>Sign-in</h1>
              <form className="login_form" onSubmit={onSubmitLogin}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={onChangeInput}
                  variant="outlined"
                  error={userSignIn.error}
                />
                <br />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  value={user.password}
                  onChange={onChangeInput}
                  variant="outlined"
                  error={userSignIn.error}
                />
                <br />
                {userSignIn.error ? (
                  <Alert severity="error" style={{ marginBottom: "10px" }}>
                    Hey!!! there was a error login in. Make sure the information
                    is right
                  </Alert>
                ) : (
                  <Alert severity="info">
                    By continuing, you agree to placeholder's Conditions of Use
                    and Privacy Notice.
                  </Alert>
                )}
                <Button variant="contained" type="submit">
                  Sign In
                </Button>
              </form>
              <div className="login_linkOver">
                <div className="login_linkContainer">
                  <Link to="/">Forgot password</Link>
                  <Link to="/help">Other Issues</Link>
                </div>
                <div className="login_linkContainer">
                  <Link to="/">Go Back</Link>
                </div>
              </div>
            </div>
            <Link to={`/register?redirect=${redirect}`}>
              <Button variant="contained" className="login_NewAcc">
                Create a new Account
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
