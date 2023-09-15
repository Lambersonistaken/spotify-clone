import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img
          src="https://cms-fym.imgix.net/8cme_Qwug_TG_Wrx_G_Qvj2kf_51f36999b6.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1200&max-h=1200"
          alt=""
        />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
