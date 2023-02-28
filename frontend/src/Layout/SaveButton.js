import classes from "./SaveButton.module.css";

import buttonImage from "../../assets/icons/diskette.png";
import { Tooltip } from "@material-ui/core";

const SaveButton = () => {
  return (
    <Tooltip title="Save">
      <button className={classes.button}>
        <img
          className={classes.buttonImg}
          src={buttonImage}
          alt="back button"
        />
      </button>
    </Tooltip>
  );
};

export default SaveButton;
