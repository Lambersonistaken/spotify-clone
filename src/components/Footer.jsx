import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ReplayIcon from "@mui/icons-material/Replay";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SidebarOption from "./SidebarOption";
import { Grid, Slider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://i.pinimg.com/1200x/6f/97/bc/6f97bcd3973ccc13686801ca124920b1.jpg"
          alt=""
          className="footer_albumlogo"
        />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <ReplayIcon className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer_icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer_icon" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
