import React from "react";
import { motion } from "framer-motion";
import Collapsecomp from "./CollapseComponent";
import "./Projects.css";
import Projectlisting from "./ProjectListing";

const Projects = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ delay: 0.4 }}
    >
      <div className="projectcontainer">
        <div className="collapsecontainer">
          <Collapsecomp heading="Coding">
            <Projectlisting
              heading="Kaksha.ai"
              desc="Front End Developer Intern"
            >
              YO yo
            </Projectlisting>
            <Projectlisting
              heading="Saanjh Matrimonial Services"
              desc="Personal Project"
            >
              Bo Bo
            </Projectlisting>
            <Projectlisting heading="Capture Films" desc="College Project">
              Bo Bo
            </Projectlisting>
          </Collapsecomp>
        </div>
        <div className="collapsecontainer">
          <Collapsecomp heading="Music">
            <Projectlisting heading="Silsilay" desc="Acoustic Song">
              Bo Bo
            </Projectlisting>
            <Projectlisting
              heading="God in a Metro Album"
              desc="Original Soundtrack"
            >
              Bo Bo
            </Projectlisting>
          </Collapsecomp>
        </div>
        <div className="collapsecontainer">
          <Collapsecomp heading="Filmmaking">
            <Projectlisting heading="Silsilay" desc="Acoustic Song">
              Bo Bo
            </Projectlisting>
            <Projectlisting
              heading="God in a Metro Album"
              desc="Original Soundtrack"
            >
              Bo Bo
            </Projectlisting>
          </Collapsecomp>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
