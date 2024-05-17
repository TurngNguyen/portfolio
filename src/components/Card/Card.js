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
        height: "35vh",
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        justifyContent: "center",
        alignItems: "center",
        filter: isBlurred ? "blur(8px)" : "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "250px", flex: "1" }}
        image={image}
        alt={imageAlt}
        draggable="false"
      />
      <CardContent sx={{ flex: "1", textAlign: "center" }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="#f5f5f5" component="div">
          {content}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
