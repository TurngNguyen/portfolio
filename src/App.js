import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import { Portfolio, projects } from "./components/Portfolio/Portfolio";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Fade,
  Typography,
  CardMedia,
} from "@mui/material";
import minecraft_chest from "./images/minecraft_chest.png";
import minecraft_chest_open from "./images/minecraft_chest_open.webp";
import firework from "./images/firework.webp";
import firework_launch from "./sounds/firework_launch.mp3";
import firework_explode from "./sounds/firework_explode.mp3";
import chest_open_and_close from "./sounds/chest_open_and_close.mp3";

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const randomProject = projects[Math.floor(Math.random() * projects.length)];

  // Reset variables when navigating to a new page
  const location = useLocation();
  useEffect(() => {
    setClickCount(0);
    setRotate(0);
    setShowCard(false);
  }, [location]);

  const handleClick = () => {
    if (isAnimating) return;

    if (clickCount < 4) {
      setClickCount(clickCount + 1);
      setRotate(1);
    } else if (clickCount === 4) {
      setClickCount(clickCount + 1);
      setIsAnimating(true);

      try {
        openChest();
        spawnFirework();
        moveChest();
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }
  };

  const openChest = async () => {
    const chest = document.getElementById("chest");
    chest.innerHTML = `<img src=${minecraft_chest_open} alt='minecraft chest open' draggable='false' />`;
    const audio = new Audio(chest_open_and_close);
    audio.play();
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  const spawnFirework = () => {
    const fireworkElement = document.createElement("img");
    fireworkElement.src = firework;
    fireworkElement.style.width = "120px";
    fireworkElement.style.height = "120px";
    fireworkElement.style.position = "absolute";

    const audio = new Audio(firework_launch);
    audio.play();

    const animation = fireworkElement.animate(
      [
        { transform: "translateY(0)" },
        {
          transform: `translateY(-${
            window.innerHeight - fireworkElement.height
          }px)`,
        },
      ],
      {
        duration: 1000,
        easing: "linear",
        fill: "forwards",
      }
    );

    const centeringDiv = document.getElementById("centerDiv");
    centeringDiv.appendChild(fireworkElement);

    animation.onfinish = () => {
      const audio = new Audio(firework_explode);
      audio.play();
      centeringDiv.removeChild(fireworkElement);
    };
  };

  const moveChest = () => {
    const chest = document.getElementById("chest");
    const animation = chest.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(10vh)" }],
      {
        duration: 1000,
        easing: "linear",
        fill: "forwards",
      }
    );

    animation.onfinish = () => {
      closeChest();
      setShowCard(true);
      localStorage.setItem(randomProject.title, "false");
      setIsAnimating(false);
    };
  };

  const closeChest = () => {
    const chest = document.getElementById("chest");
    chest.innerHTML = `<img src=${minecraft_chest} alt='minecraft chest' draggable='false' />`;
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Container
                sx={{
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fade in={showCard}>
                  <Card
                    sx={{
                      height: "35vh",
                      width: "50vw",
                      backgroundColor: "#4e4e4e",
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: "200px", flex: "1" }}
                      image={randomProject.image}
                      alt={randomProject.imageAlt}
                      draggable="false"
                    />
                    <CardContent sx={{ flex: "1" }}>
                      <Typography gutterBottom variant="h4" component="div">
                        {randomProject.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#f5f5f5"
                        component="div"
                      >
                        {randomProject.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Container>
              <div
                id="centerDiv"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  id="chest"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "absolute",
                  }}
                  rotate={rotate}
                  onClick={handleClick}
                  onAnimationEnd={() => setRotate(0)}
                >
                  <img
                    src={minecraft_chest}
                    alt="minecraft chest"
                    draggable="false"
                  />
                </Box>
              </div>
            </>
          }
        ></Route>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
