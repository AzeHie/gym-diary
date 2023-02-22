import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Layout/Card";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const isLoginMode = props.mode === "loginMode" ? true : false;
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(true);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(true);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const usernameInputHandler = () => {
    setUsernameTouched(true);
  };

  const passwordInputHandler = () => {
    setPasswordTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setUsernameTouched(true);
    setPasswordTouched(true);

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredUsername.trim() === "") {
      setUsernameIsInvalid(true);
      return;
    }

    if (enteredPassword.trim() === "") {
      setPasswordIsInvalid(true);
    }

    if (isLoginMode) { // LOGGING IN USER
      setUsernameIsInvalid(false);
      setPasswordIsInvalid(false);
      // send request to backend, if real validation over there
    }

    if (!isLoginMode) { // REGISTERING USER..
      if (enteredUsername.trim().length < 3) {
        setUsernameIsInvalid(true);
        return;
      }
      if (enteredPassword.trim().length < 8) {
        setPasswordIsInvalid(true);
        return;
      }
      setUsernameIsInvalid(false);
      setPasswordIsInvalid(false);
    }
  };

  const onCancel = () => {
    navigate("/");
  };

  const nameInputIsInvalid = usernameIsInvalid && usernameTouched;
  const passwordInputIsInvalid = passwordIsInvalid && passwordTouched;

  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={classes.formContainer}>
        {isLoginMode && (
          <p>Please log in to make your training a bit better!</p>
        )}
        {!isLoginMode && (
          <p>
            Please fill up the form and hit submit to register a new account!
          </p>
        )}
        <div className={classes.labelDiv}>
          <label htmlFor="username">Username:</label>
        </div>
        <input
          ref={usernameInputRef}
          type="text"
          id="username"
          onBlur={usernameInputHandler}
        />
        {isLoginMode && nameInputIsInvalid && usernameTouched && (
          <p className={classes.errorMessage}>Invalid username</p>
        )}
        {!isLoginMode && nameInputIsInvalid && usernameTouched && (
          <p className={classes.errorMessage}>
            username has to be atleast 3 characters long!
          </p>
        )}
        <div className={classes.labelDiv}>
          <label htmlFor="password" className={classes.password}>
            Password:
          </label>
        </div>
        <input
          ref={passwordInputRef}
          type="password"
          id="password"
          onBlur={passwordInputHandler}
        />
        {isLoginMode && passwordInputIsInvalid && passwordTouched && (
          <p className={classes.errorMessage}>Please enter a password!</p>
        )}
        {!isLoginMode && passwordInputIsInvalid && passwordTouched && (
          <p className={classes.errorMessage}>
            Password must include atleast 8 characters!
          </p>
        )}
        <div className={classes.buttons}>
          <button className="basicButton" type="submit">
            {props.submitBtn}
          </button>
          <button className="basicButton" type="button" onClick={onCancel}>
            {props.cancelBtn}
          </button>
        </div>
        {isLoginMode && (
          <p style={{ marginTop: "-50px" }}>
            Not an account yet? Register <Link to="/signup">Here!</Link>
          </p>
        )}
      </form>
    </Card>
  );
};

export default AuthForm;
