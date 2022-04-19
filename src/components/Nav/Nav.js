import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

// this nav is built on top of materia ui you can go to documents "https://mui.com/material-ui/getting-started" to get started and get overview of what happening here
const Nav = ({ onPlaceChanged, onLoad }) => {
  // use styles is a material ui function that imported to styles directly without the needs of import or export it by easily call makeStyle "@material-ui/core/styles"
  // however if you want to tranfer to styled component have an overview of material-ui style
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor App
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Follow passion and explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
