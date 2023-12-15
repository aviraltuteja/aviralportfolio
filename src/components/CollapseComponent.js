import { Box, Button, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./CollapseComponent.css";

const Collapsecomp = (props) => {
  const [open, toggleOpen] = useState(false);
  const handletoggle = () => {
    toggleOpen(!open);
  };
  return (
    <div>
      <div className="mainbox">
        <div className="headingprojects">
          <h2 className="heading2">{props.heading}</h2>
          <IconButton onClick={handletoggle} sx={{ marginRight: "1rem" }}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>
        <div>
          <Collapse in={open}>
            <div className="childholder">{props.children}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default Collapsecomp;
