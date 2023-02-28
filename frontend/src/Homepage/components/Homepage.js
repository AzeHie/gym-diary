import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Layout/Card";

import classes from './Homepage.module.css';

const Homepage = () => {
  return <Card>
    <div>
    <h2>Gym diary</h2>
    <p>Just a simple diary to make your training experiense a bit better.</p>
    <p>Please log in to create your own training program and feel the difference!</p>
    <p>Not an account yet? No panic, register <Link className={classes.signupLink} to="/signup">here!</Link></p>
    </div>
  </Card>
};

export default Homepage;