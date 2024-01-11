import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import "./ImageSlider.css";

const ImageSlider = (props) => {
  const [activimg, setactivimg] = useState(0);
  const goBack = () => {
    if (activimg > 0) {
      setactivimg(activimg - 1);
    }
  };
  const goForward = () => {
    if (activimg < props.data.length - 1) {
      setactivimg(activimg + 1);
    }
  };
  return (
    <div className="mainslider">
      <IconButton onClick={goBack}>
        <ArrowBackIosIcon fontSize="large" style={{ color: "white" }} />
      </IconButton>
      <div className="sliderimg-container">
        <img className="mainimg-slider" src={props.data[activimg].url}></img>
        <h3 className="certititle">{props.data[activimg].title}</h3>
      </div>
      <IconButton onClick={goForward}>
        <ArrowForwardIosIcon fontSize="large" style={{ color: "white" }} />
      </IconButton>
    </div>
  );
};
export default ImageSlider;
