import "./LoginPage.css";
import { useRef, useEffect, useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const enteredEmailIsValid = email.trim() === "jyoti@sahu";
  const emailInputIsInvalid = !enteredEmailIsValid && emailFocus;
  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const enteredPasswordIsValid = password.trim() === "jyoti";
  const passwordInputIsInvalid = !enteredPasswordIsValid && passwordFocus;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const emailFocusHandler = () => {
    setEmailFocus(true);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordFocusHandler = () => {
    setPasswordFocus(true);
  };

  const submitHadler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmailFocus(true);
    setPasswordFocus(true);

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }

    setEmail("");
    setPassword("");
    setEmailFocus(false);
    setPasswordFocus(false);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={submitHadler}>
           <h3 className="heading">Sign-In</h3>
            <div className="login__field">
              {/* email field */}
              <span className="material-icons login__icon">person</span>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                onChange={emailChangeHandler}
                onBlur={emailFocusHandler}
                value={email}
              />
              {emailInputIsInvalid && (
                <p className="errorMsg">
                  Enter your email or mobile phone number
                </p>
              )}
            </div>
            <div className="login__field">
              {/* password field */}
              <span className="material-icons login__icon">key</span>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={passwordFocusHandler}
                value={password}
                autoComplete="off"
              />
              {passwordInputIsInvalid && (
                <p className="errorMsg">Enter your password</p>
              )}
            </div>
            {/* submit button */}
            <button
              className="button login__submit"
              type="submit"
              disabled={!formIsValid}
            >
              <span className="button__text">Log In Now</span>
              
            </button>
            <br/>
            {!formIsValid && emailFocus && passwordFocus &&(
              <p className="errorMsg">
                We cannot find an account with that email address
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
