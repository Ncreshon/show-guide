import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../Search/SearchInput";

import './NavBar.css'

export default function NavBar(props) {
  const { setShows, shows } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navBar" position="static" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon={faHome} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Show Guide
          </Typography>
          <SearchInput setShows={setShows} shows={shows} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
