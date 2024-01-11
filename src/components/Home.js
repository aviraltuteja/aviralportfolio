import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import codebg from "../codebg.png";
import filmbg from "../filmbg.png";
import music from "../music.png";
import { useState } from "react";
import wave from "../wave.svg";

const Home = () => {
  const [filmbgv, setfilmbgv] = useState(false);
  const filmme = () => {
    setfilmbgv(true);
  };
  const filmml = () => {
    setfilmbgv(false);
  };
  const [musicbgv, setmusicbgv] = useState(false);
  const musicme = () => {
    setmusicbgv(true);
  };
  const musicml = () => {
    setmusicbgv(false);
  };
  const [codebgv, setcodebgv] = useState(false);
  const codeme = () => {
    setcodebgv(true);
  };
  const codeml = () => {
    setcodebgv(false);
  };
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      transition={{ delay: 0.4 }}
    >
      <div id="cmf">
        <img
          src={codebg}
          style={{ opacity: codebgv ? 0.1 : 0 }}
          className="imgs codeimg"
        ></img>
        <img
          src={filmbg}
          style={{ opacity: filmbgv ? 0.1 : 0 }}
          className="imgs filmbg"
        />
        <img
          src={music}
          style={{ opacity: musicbgv ? 0.1 : 0 }}
          className="imgs musicbg"
        ></img>

        <motion.div
          onMouseEnter={codeme}
          onMouseLeave={codeml}
          className="column codecol"
        >
          <div className="uppertext">
            <p>
              I am a proficient JavaScript coder with a specialization in MERN
              stack development. My passion lies in crafting innovative and
              functional web applications, driven by a commitment to building
              cutting-edge solutions that enhance user experiences and meet the
              demands of modern technology.
            </p>
          </div>

          <div className="heading">
            <h1
              className="homeheading"
              style={{ opacity: filmbgv || musicbgv ? 0.7 : 1 }}
            >
              Coder
            </h1>
          </div>
          <div className="lowertext">
            <p>
              It's akin to being an architect, where I design the backbone of
              digital solutions, creating the infrastructure that powers the
              applications I develop. Constructing these components, from
              defining data models to establishing robust API endpoints, is a
              puzzle I thoroughly enjoy solving.
            </p>
          </div>
        </motion.div>
        <motion.div
          onMouseEnter={filmme}
          onMouseLeave={filmml}
          className="column filmcol"
        >
          <div className="uppertext">
            <p>
              As a filmmaker, I take great pride in sharing my vision through
              the lens of a camera. With a profound passion for storytelling, I
              have honed the art of cinematic narration, weaving intricate tales
              that capture the essence of life, culture, and human experience.
            </p>
          </div>

          <div className="heading">
            <h1
              className="homeheading"
              style={{ opacity: codebgv || musicbgv ? 0.7 : 1 }}
            >
              Filmmaker
            </h1>
          </div>
          <div className="lowertext musiccol">
            <p>
              From a young age, I found myself enchanted by the world of cinema.
              The magic of storytelling through the lens of a camera was a
              captivating experience that I couldn't resist. It was as though I
              had discovered a portal to alternate dimensions, where the
              boundaries of reality melted away, and I could explore the vast
              landscapes of human emotion, culture, and experience
            </p>
          </div>
        </motion.div>
        <motion.div
          onMouseEnter={musicme}
          onMouseLeave={musicml}
          className="column"
        >
          <div className="uppertext">
            <p>
              In the world of music, my journey began with a profound
              inspiration drawn from the cinematic mastermind, Hans
              Zimmer.However, as I delved further into the realm of music, I
              discovered that my heart had an even deeper connection with the
              classics that had been my constant companions for years.
            </p>
          </div>

          <div className="heading">
            <h1
              className="homeheading"
              style={{ opacity: filmbgv || codebgv ? 0.7 : 1 }}
            >
              Musician
            </h1>
          </div>
          <div className="lowertext">
            <p>
              With each passing day, I found myself compelled to create melodies
              and craft lyrics that could capture the essence of life's myriad
              emotions, just as my musical idols had done. The lyrical
              storytelling of R.D. Burman, the poetic depth of The Beatles, and
              the versatility of Sonu Nigam fueled my imagination, pushing me to
              explore my own creative depths.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
