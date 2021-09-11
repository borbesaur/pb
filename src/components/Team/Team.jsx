import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <h1>The Plasma Beach Team</h1>

      <div className="team-table">
        <div className="table-entry">
          <div className="left-side">
            <h3>Borbesaur</h3>
            <div className="avatar"></div>
            <img src="images/allen.png" />
          </div>
          <div className="right-side">
            Borbesaur is the creator of Plasma Beach. He is a dev who has been
            working in the de-fi space for a while now. He has also had normie
            programming jobs as well but that's (hopefully) part of the past.
            Borbesaur also has a real life college degree in English & Creative
            Writing and is a published novelist and poet. Fun fact: Borbesaur
            HATES commas and will <b> fight you </b> (figuratively) if you suggest adding
            a comma anywhere.  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
