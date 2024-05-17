import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Portfolio", "About"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderNameBigScreen = () => {
    return (
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Trung Nguyen
      </Typography>
    );
  };

  const renderNavMenu = () => {
    return (
      // Box is a layout component that can be used to create a flexbox container
      // Three line box that only shows on small screen sizes
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          {/* The image of the three line box */}
          <MenuIcon />
        </IconButton>
        {/* Menu opened by the three line box */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {/* Contents of menu */}
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{
                  fontFamily: "monospace",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  const renderNameSmallScreen = () => {
    return (
      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Trung Nguyen
      </Typography>
    );
  };

  const renderNavLinks = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to={`/${page.toLowerCase()}`}
          >
            {page}
          </Button>
        ))}
      </Box>
    );
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#353535" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Renders these two on larger screen sizes */}
          {renderNameBigScreen()}
          {renderNavLinks()}
          {/* Only renders these two on smaller screen sizes */}
          {renderNavMenu()}
          {renderNameSmallScreen()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
