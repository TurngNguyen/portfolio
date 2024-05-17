import { useState, useEffect } from "react";
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Card = ({ image, imageAlt, title, content }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const storedBlurState = localStorage.getItem(title);
    if (storedBlurState) {
      setIsBlurred(storedBlurState === "true");
    }
  }, [title]);

  const handleClick = () => {
    setIsBlurred(false);
    localStorage.setItem(title, "false");
  };

  return (
    <MUICard
      onClick={handleClick}
      sx={{
        backgroundColor: "#4e4e4e",
        color: "#ffffff",
        height: "auto",
        // display: "flex",
        // flexDirection: "column",
        // flexWrap: "wrap",
        margin: "1rem",
        justifyContent: "center",
        alignItems: "center",
        filter: isBlurred ? "blur(8px)" : "none",
        textAlign: "center",
        border: "1px solid #8dc0cf",
      }}
    >
      {/* <CardMedia
        component="img"
        sx={{ height: "10px", flex: "1" }}
        image={image}
        alt={imageAlt}
        draggable="false"
      /> */}
      <CardContent>
        <h3 style={{ color: '#6cb3c8' }}>
          {title}
        </h3>
        <Typography color="#d8e0fc" component="div" textAlign="left">
          {content}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
