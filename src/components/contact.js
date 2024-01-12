import React from "react";
import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="maincontact">
      <div>
        <h3 className="headtext">
          I am actively on the lookout for a{" "}
          <span className="yellowtext">Software Engineering job</span> where
          <br /> I can contribute my skills and experience into building
          extraordinary products and user experiences for people.
        </h3>
        <h3 className="headtext2">
          The following links will be useful if you are looking to hire me!
        </h3>
      </div>
      <div>
        <IconButton
          component={Link}
          to="https://github.com/aviraltuteja" // Full URL including the protocol
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" style={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.linkedin.com/in/aviral-tuteja-694b19116/" // Full URL including the protocol
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" style={{ color: "#FFFFFF" }} />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.instagram.com/lankapati_ra.one/" // Full URL including the protocol
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" style={{ color: "#FFFFFF" }} />
        </IconButton>
      </div>
      <div>
        <Button
          sx={{
            backgroundColor: "#E5EFF1",
            color: "#2B4950",
            margin: "1rem",
            "&:hover": {
              backgroundColor: "#F2F7F8",
              color: "#243D42",
            },
          }}
          component={Link}
          to="https://drive.google.com/file/d/10HKvwLWuIL5UuOtX27GeFZa3uTMyaDW2/view?usp=sharing" // Full URL including the protocol
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </div>
      <div>
        <h4 className="subheadtext" style={{ margin: "2rem 0 0 0" }}>
          You can mail me at{" "}
          <span className="yellowtext">aviraltuteja@gmail.com</span> !
        </h4>
      </div>
    </div>
  );
};

export default Contact;
