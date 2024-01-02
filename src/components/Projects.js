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
              During my tenure as a Frontend Development Intern at Kaksha.ai, I
              implemented advanced React skills, contributing to a live project.
              This involved seamless integration of React libraries, such as
              ReactMUI, CodeMirror, ReactPdf, and ReactYoutube. Additionally, I
              actively collaborated on Python API integration, gaining practical
              experience in Docker for efficient project deployment and scaling.
              Becoming proficient in Git operations was instrumental in enabling
              effective collaboration within the development team. Notably, I
              demonstrated adaptability in a high-pressure, real-world
              environment, further solidifying my skills as a dynamic and
              capable frontend developer.
            </Projectlisting>
            <Projectlisting
              heading="Saanjh Matrimonial Services"
              desc="Personal Project"
            >
              Managed both frontend and backend tasks; I employed EJS for
              templating, ensuring a seamless user interface. To enhance
              security, I successfully integrated token-based authentication and
              created APIs to facilitate efficient communication between
              components. Proficient in SQL database management, I ensured the
              development of a secure and user-friendly matrimonial platform,
              showcasing my comprehensive skills in both frontend design and
              backend functionality.
            </Projectlisting>
            <Projectlisting heading="Capture Films" desc="College Project">
              As part of a college project, I constructed a captivating Landing
              Page featuring beautiful animations and apt designs. Leveraging
              React, I not only implemented the design but also delved into key
              concepts such as Hooks, Component Distribution, Props, and States.
              This experience honed my skills in designing stylish and efficient
              web pages, showcasing my proficiency in utilizing advanced React
              concepts for an engaging user interface.
            </Projectlisting>
          </Collapsecomp>
        </div>
        <div className="collapsecontainer">
          <Collapsecomp heading="Music">
            <Projectlisting heading="Silsilay" desc="Acoustic Song">
              I successfully produced a song for an indie artist, crafting not
              only the musical composition but also creating a visually
              compelling music video. The culmination of these efforts resulted
              in a YouTube upload that garnered more than 1000 views, reflecting
              the project's resonance with the audience. Additionally, the song
              received recognition on a broader scale, as it was featured on
              Rolling Stone India's Instagram page, further validating the
              quality and appeal of the work.
            </Projectlisting>
            <Projectlisting
              heading="God in a Metro Album"
              desc="Original Soundtrack"
            >
              I undertook the creation of soundtracks for five episodes, a
              challenging endeavor that allowed me to showcase my versatility
              and creativity in composing music. To enhance my skills, I
              dedicated time to learning orchestral music from scratch, delving
              into the intricacies of this complex genre. Utilizing free
              libraries, I crafted orchestral pieces that not only met the
              project's requirements but also garnered appreciation from a
              diverse audience. This achievement highlighted my ability to
              leverage limited resources to produce high-quality, well-received
              orchestral music compositions.
            </Projectlisting>
          </Collapsecomp>
        </div>
        <div className="collapsecontainer">
          <Collapsecomp heading="Filmmaking">
            <Projectlisting heading="Nemesis" desc="Screenwriter">
              Wrote a short film called ‘Nemesis’ and gave valuable inputs
              during the production of the short film. Won the awards for Best
              Writer/Script at Port Blair International Film Festival-Nov’22,
              Havelock International Festival’22 and Diamond Bell International
              Film Festival’22 while the film won multiple awards at various
              national and international film festivals.
            </Projectlisting>
            <Projectlisting
              heading="Capture Films"
              desc="Director and Producer"
            >
              A Youtube Page that I run with my friend from college. Together we
              comical and satirical videos often shooting and editing them
              ourselves. We often collaborate with our friends to bring out
              unique takes and perspectives on things we observe around us.
            </Projectlisting>
            <Projectlisting
              heading="Almost Woke (tentative)"
              desc="Assistant Screenwriter and Script Supervisor, Barsaati Films"
            >
              Worked as a part of the writing and the production team at an
              indie production house out of Delhi called Barsaati Films and
              played my part in kickstarting a web series titled ‘Almost Woke’.
              Also channeled my efforts during the shoot of the Pilot by being
              the Script Supervisor on the sets.
            </Projectlisting>
          </Collapsecomp>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
