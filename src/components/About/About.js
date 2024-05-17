import { Container, Typography } from "@mui/material";

import self_pic from "../../images/me.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <Container style={{}}>
      <img
        src={self_pic}
        alt="Me"
        style={{ width: "30%", height: "auto", marginTop: "1.5rem" }}
      />
      <Typography
        style={{
          fontSize: "4em",
          color: "#b1aca3",
          margin: "20px",
          fontFamily: "monospace",
        }}
      >
        Trung Nguyen
      </Typography>
      <Typography
        style={{
          fontSize: "2em",
          color: "#e4ded3",
          margin: "20px",
          fontFamily: "monospace",
          textAlign: "justify",
        }}
      >
        Hi there! I started learning how to code as a high school student as
        part of their Computer Science Pathway, and I have stuck with it ever
        since. I am a currently a senior Computer Science student at California
        State University, Fullerton. I love making fun software projects and
        learning new technologies. I especially love automating things and
        making things more efficient.
      </Typography>
      <Container
        id="contact"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <a href="https://github.com/TurngNguyen">
          <GitHubIcon
            style={{ fontSize: "3em", color: "#e4ded3", marginRight: "10px" }}
          />
        </a>
      </Container>
    </Container>
  );
};

export default About;
