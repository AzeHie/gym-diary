
import { Link } from "react-router-dom";
import Card from "../Layout/Card";

import classes from "./Diary.module.css";

const DiaryComponent = () => {

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.buttonContainer}>
          <div className={classes.button}>
            <Link className={classes.navLink} to="/diary/currentprogram"><p>Current program</p></Link>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.button}>
            <Link className={classes.navLink} to="/diary/newprogram"><p>Add new program</p></Link>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.button}>
          <Link className={classes.navLink} to="/diary/previousprograms"><p>Previous programs</p></Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DiaryComponent;
