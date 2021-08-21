import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RegNav from "../Nav/LoginNav/Backupnav";
import "./Register.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory, useLocation } from "react-router";
import { register } from "../../Redux/Action/Users/RegisterAction";
import { Backdrop, CircularProgress, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";

function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const userRegister = useSelector((state) => state.userRegister);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const [confirmPassError, setConfirmError] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    Confirm: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.Confirm) {
      setConfirmError(true);
    } else {
      setConfirmError(false);
      dispatch(register(user.name, user.email, user.password));
    }
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <>
      {userRegister.loading ? (
        <Backdrop
          open={true}
          onClick={null}
          style={{ zIndex: "200", backgroundColor: "rgb(0 0 0 / 76%)" }}
        >
          <CircularProgress />
        </Backdrop>
      ) : null}
      {userInfo ? null : (
        <div className="bahakak">
          <RegNav />
          <div className="register_Container">
            <div className="registerBox">
              <h1>Create account</h1>
              <form onSubmit={registerSubmit}>
                <TextField
                  label="Legal Name"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={onChangeInput}
                  variant="outlined"
                />
                <br />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={onChangeInput}
                  variant="outlined"
                  error={userRegister.error}
                />
                <br />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={onChangeInput}
                  variant="outlined"
                  error={userRegister.error && confirmPassError}
                />

                <br />
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="Confirm"
                  value={user.Confirm}
                  onChange={onChangeInput}
                  variant="outlined"
                  error={userRegister.error && confirmPassError}
                />
                <br />
                {confirmPassError ? (
                  <Alert severity="error" style={{ marginBottom: "10px" }}>
                    Password did not match
                  </Alert>
                ) : null}
                {userRegister.error ? (
                  <Alert severity="error" style={{ marginBottom: "10px" }}>
                    Hey!!! there was a error in signing up. Make sure the
                    information is right
                  </Alert>
                ) : (
                  <Alert severity="info">
                    By continuing, you agree to placeholder's Conditions of Use
                    and Privacy Notice.
                  </Alert>
                )}
                <Button variant="contained" type="submit" disableElevation>
                  Create
                </Button>
              </form>

              <div className="regLoginSugg">
                <p>
                  Already have an account?{" "}
                  <Link to={`/login?redirect=${redirect}`}>Sign In</Link>
                </p>
                <Link to="/" className="regGotoHome">
                  <ArrowBackIosIcon />
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
