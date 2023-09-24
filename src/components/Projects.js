import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ delay: 0.4 }}
    >
      These are my projects
    </motion.div>
  );
};

export default Projects;
