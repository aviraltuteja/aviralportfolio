import React from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const animationVariants = {
    initial: { y: "45vh" },
    animate: { y: "0" },
  };
  return (
    <motion.div
      id="main-nav"
      initial="initial"
      animate={props.animate ? "animate" : "initial"}
      variants={animationVariants}
    >
      <Link className="link" to="/home">
        <h2>Home</h2>
      </Link>
      <Link className="link" to="/projects">
        <h2>Projects</h2>
      </Link>
      <Link className="link" to="/achievements">
        <h2>Achievements</h2>
      </Link>
      <Link className="link" to="/contact">
        <h2>Contact</h2>
      </Link>
    </motion.div>
  );
};

export default Nav;
