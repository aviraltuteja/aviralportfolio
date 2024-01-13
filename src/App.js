import Home from "./components/Home";
import Nav from "./components/Navbar";
import { Button } from "@mui/material";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import React from "react";
import waves from "./waves.svg";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.css";
import Aviral from "./Asset 10.png";
import wavebg from "./uxieone.png";

import { useState, useEffect } from "react";
import Projectstwo from "./components/Projectstwo";
import Certificates from "./components/Certificates";
function App() {
  const location = useLocation();

  const [isAnimationVisible, setIsAnimationVisible] = useState(
    location.pathname === "/"
  );
  const [isButtonVisible, setIsButtonVisible] = useState(
    location.pathname === "/"
  );
  // const navigate = useNavigate();
  useEffect(() => {
    setIsAnimationVisible(!(location.pathname === "/"));
    setIsButtonVisible(location.pathname === "/");
  }, [location]);
  const handleButtonClick = () => {
    setIsAnimationVisible(true);
    setIsButtonVisible(false);
    // <Navigate to="/home" />;
  };
  return (
    <div className="mainapp">
      <Nav animate={isAnimationVisible} />
      {/* {isButtonVisible && (
        <>
          <img
            src={wave}
            style={{
              position: "absolute",
              bottom: "0",
              opacity: "100%",
            }}
            alt="Bottom Wave"
          />
          <img
            src={wavetop}
            style={{
              position: "absolute",
              top: "0",
              opacity: "100%",
            }}
            alt="Top Wave"
          />
        </>
      )} */}
      {isButtonVisible && (
        <div style={{ position: "absolute", top: "0" }}>
          <img
            src={wavebg}
            style={{ opacity: "5%", width: "100vw", height: "100vh" }}
          ></img>
          <div className="textandimage">
            <div className="text-start">
              <h1 className="text-start-head">
                Hi, My name is Aviral and <br />I am a{" "}
                <span className="yellowtext"> MERN Stack Developer.</span>
                <h1 className="text-start-subhead">
                  This portfolio will give you a brief introduction
                  <br />
                  about my professional skills and hobbies.
                </h1>
              </h1>
            </div>
            <div className="profile-start">
              <img src={Aviral} className="profile"></img>
            </div>
          </div>
        </div>
      )}

      <div className="cencon">
        {isButtonVisible && (
          <Link to="/home">
            <Button
              sx={{
                color: "#C8DDE4",
                fontFamily: "var(--font-b)",
                padding: "5px 10px",
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "#E4EFF1",
                  color: "#223C44",
                },
              }}
              className="butpos"
              onClick={handleButtonClick}
            >
              Welcome to the Profile!
            </Button>
          </Link>
        )}
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projectstwo />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
