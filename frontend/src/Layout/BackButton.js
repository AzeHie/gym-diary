import classes from "./BackButton.module.css";

import buttonImage from "../assets/icons/backbutton.png";
import { Tooltip } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate(props.loc);
  };


  return (
      <Tooltip className={classes.toolTippi} title={props.title}>
      <img onClick={navigateToMenu} className={classes.buttonImg} src={buttonImage} alt="back button" />
      </Tooltip>
  );
};


export default BackButton;