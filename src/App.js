import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import React, { useState } from 'react';
import { Box, Card, CardActions, CardActionArea, CardContent, Container, Fade, Typography, CardMedia } from '@mui/material';
import minecraft_chest from './images/minecraft_chest.png';
import minecraft_chest_open from './images/minecraft_chest_open.webp';
import firework from './images/firework.webp';
import magic_cards from './images/magic_cards.jpg';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    if (clickCount < 4) {
      setClickCount(clickCount + 1);
      setRotate(1);
    } else if (clickCount === 4) {
      setClickCount(clickCount + 1);
      try {
        openChest();
        spawnFirework();
        moveChest();
      } catch (error) {
        console.error(error);
      }
    } else { return }
  };
  
  const openChest = async () => {
    const chest = document.getElementById('chest');
    chest.innerHTML = `<img src=${minecraft_chest_open} alt='minecraft chest open' />`;

    await new Promise(resolve => setTimeout(resolve, 500));
  };
  
  const spawnFirework = () => {
    const fireworkElement = document.createElement('img');
    fireworkElement.src = firework;
    fireworkElement.style.width = '120px';
    fireworkElement.style.height = '120px';
    fireworkElement.style.position = 'absolute';

    const animation = fireworkElement.animate(
      [
      { transform: 'translateY(0)' },
      { transform: `translateY(-${window.innerHeight-fireworkElement.height}px)` }
      ],
      {
      duration: 1000,
      easing: 'linear',
      fill: 'forwards'
      }
    );

    const centeringDiv = document.getElementById('centerDiv');
    centeringDiv.appendChild(fireworkElement);

    animation.onfinish = () => {
      centeringDiv.removeChild(fireworkElement);
    };
  };

  const moveChest = () => {
    const chest = document.getElementById('chest');
    const animation = chest.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(10vh)' }
      ],
      {
        duration: 1000,
        easing: 'linear',
        fill: 'forwards'
      }
    );

    animation.onfinish = () => {
      closeChest();
      setShowCard(true);
    };
  }

  const closeChest = () => {
    const chest = document.getElementById('chest');
    chest.innerHTML = `<img src=${minecraft_chest} alt='minecraft chest' />`;
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Container sx={{ 
                height: '60vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                <Fade in={showCard}>
                  <Card sx={{ 
                    height: '35vh', 
                    backgroundColor: '#4e4e4e', 
                    color: '#ffffff', 
                    display: 'grid', 
                    gridTemplateRows: '1fr 1fr' 
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ height: '200px' }}
                      image={magic_cards}
                      alt='magic cards'
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Magic the Gathering Card Indentifier
                      </Typography>
                      <Typography variant="body1" color="#f5f5f5" component="div">
                        <ul style={{ listStyleType: 'none', paddingInlineStart: '0' }}>
                          <li>Utilized urllib to download JSON card data and get card images via Scryfall API</li>
                          <li>Visualized training and resulting data using matplotlib to train and improve model</li>
                          <li>Learned Tensorflow to create Artificial Neural Network machine learning model to identify cards</li>
                        </ul>
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Container>
              <div id='centerDiv' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
                <Box
                  id='chest'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    position: 'absolute',
                  }}
                  rotate={rotate}
                  onClick={handleClick}
                  onAnimationEnd={() => setRotate(0)}
                >
                  <img src={minecraft_chest} alt='minecraft chest' />
                </Box>
              </div>
            </>
          }>
          </Route>
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;