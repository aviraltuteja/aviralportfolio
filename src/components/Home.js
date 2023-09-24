import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ delay: 0.4 }}
    >
      <div id="cmf">
        <div className="heading">
          {/* <p>Up</p> */}
          <h1>Coder</h1>
          {/* <p>
            I am a proficient JavaScript coder with a specialization in MERN
            stack development. My passion lies in crafting innovative and
            functional web applications, driven by a commitment to building
            cutting-edge solutions that enhance user experiences and meet the
            demands of modern technology.
          </p> */}
        </div>
        <div className="heading">
          <h1>Filmmaker</h1>
        </div>
        <div className="heading">
          <h1>Musician</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
