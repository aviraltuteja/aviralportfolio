import Home from "./components/Home";
import Nav from "./components/Navbar";
import { Button } from "@mui/material";
import Projects from "./components/Projects";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Link,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Router,
  useLocation,
} from "react-router-dom";
import "./App.css";

import { useState, useEffect } from "react";
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

      <div className="cencon">
        {isButtonVisible && (
          <Link to="/home">
            <Button
              sx={{
                color: "#0f0514",
                fontFamily: "var(--font-b)",
                padding: "5px 10px",
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "#EBF7FF",
                  color: "rgb(153, 50, 205)",
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
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
