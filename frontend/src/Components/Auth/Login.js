import { Fragment } from "react";
import AuthForm from "./AuthForm";

const LoginComponent = () => {
  return (
    <Fragment>
      <AuthForm mode={"loginMode"} submitBtn={"Login"} cancelBtn={"Back to home"}/>
    </Fragment>
  );  
};

export default LoginComponent;