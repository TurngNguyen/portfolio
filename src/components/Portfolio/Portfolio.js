import { Container } from "@mui/material";
import Card from "../Card/Card";
import servers from "../../images/servers.webp";
import magic_cards from "../../images/magic_cards.jpg";
import stocks from "../../images/stocks.jpg";
import book from "../../images/book.jpg";

const projects = [
  {
    image: servers,
    imageAlt: "servers",
    title: "Dedicated Minecraft Server Hosting",
    content: (
      <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
        <li>
          Managed and maintained a dedicated 24/7 Minecraft server using Docker,
          ensuring optimal performance and uptime
        </li>
        <li>
          Demonstrated technical expertise in Docker-based server configuration,
          plugin installation, and troubleshooting, enhancing overall gaming
          experience
        </li>
        <li>
          Resolved server-related issues within Docker environments and executed
          necessary updates, showcasing problem-solving skills and adaptability
        </li>
      </ul>
    ),
  },
  {
    image: magic_cards,
    imageAlt: "magic cards",
    title: "Machine Learning Card Identifier",
    content: (
      <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
        <li>
          Utilized urllib to download JSON card data and get card images via
          Scryfall API
        </li>
        <li>
          Visualized training and resulting data using matplotlib to train and
          improve model
        </li>
        <li>
          Learned Tensorflow to create Artificial Neural Network machine
          learning model to identify cards
        </li>
      </ul>
    ),
  },
  {
    image: stocks,
    imageAlt: "stocks",
    title: "Stock Trading Website",
    content: (
      <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
        <li>
          Designed a full stack website to view, buy, and sell stocks (Flask,
          HTML, CSS, SQLite)
        </li>
        <li>Connected to IEX's API to get accurate, real-time stock prices</li>
        <li>
          Implemented Flask framework to handle frontend and backend
          communication
        </li>
        <li>
          Leveraged Jinja to reduce repetition in HTML code and get data from
          Flask
        </li>
        <li>
          Created SQL databases to store usernames, passwords, and user's stock
          purchases/history
        </li>
      </ul>
    ),
  },
  {
    image: book,
    imageAlt: "book",
    title: "Spell Checker",
    content: (
      <ul style={{ listStyleType: "none", paddingInlineStart: "0" }}>
        <li>
          Find all misspellings by comparing words to a given dictionary in C
          language
        </li>
        <li>
          Implemented hash table manually via hash, load, unload, and check
          functions
        </li>
        <li>
          Tested to be able to read, store, and retrieve words for large
          dictionary files (over 140,000 words)
        </li>
      </ul>
    ),
  },
];

const Portfolio = () => {
  return (
    <Container sx={{}}>
      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          imageAlt={project.imageAlt}
          title={project.title}
          content={project.content}
        />
      ))}
    </Container>
  );
};

export { Portfolio, projects };
