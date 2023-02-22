import { Fragment } from "react";
import AuthForm from "./AuthForm";

const SignupComponent = () => {
  return (
    <Fragment>
      <AuthForm
        mode={"signupMode"}
        submitBtn={"Register"}
        cancelBtn={"Cancel"}
      />
    </Fragment>
  );
};

export default SignupComponent;
