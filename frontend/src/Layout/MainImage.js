import classes from "./MainImage.module.css";

import MainImg from "../../assets/dumbbells.jpg";

const MainImage = () => {
  return (
    <div className={classes.mainImage}>
      <img src={MainImg} alt="headerImg" />
    </div>
  );
};

export default MainImage;
