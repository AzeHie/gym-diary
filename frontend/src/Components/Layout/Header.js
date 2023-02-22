import { Fragment } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";


import classes from "./Header.module.css";
import menuIcon from "../../assets/icons/burger-menu.png";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.menu}>
          <div className={classes.dropdown}>
            <img
              className={classes.menuButtonImg}
              src={menuIcon}
              alt="menuicon top-left corner"
            />
            <div className={classes.dropdownContent}>
              <Link className={classes.dropdownLink} to="/diary">
                Diary
              </Link>
              <div className={classes.dropdownLink}>Log out</div>
            </div>
          </div>
        </div>
        <div className={classes.logo}>
          <Link className="decorationOff" to="/">
            <Tooltip title="back to home">
              <h1>Gym Diary</h1>
            </Tooltip>
          </Link>
        </div>
        <div className={classes.login}>
          <Link className={classes.loginButton} to="/login">
            Log in
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
