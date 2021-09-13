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
            <p>Creator</p>
            <div className="avatar">
            <img src="images/allen.png" />
            </div>
          </div>
          <div className="right-side">
            Borbesaur is the creator of Plasma Beach. He is a dev who has been
            working in the de-fi space for a while now. He has also had normie
            programming jobs as well but that's (hopefully) part of the past.
            Borbesaur also has a real life college degree in English & Creative
            Writing and is a published novelist and poet. Fun fact: Borbesaur
            HATES commas and will <b> fight you </b> (figuratively) if you
            suggest adding a comma anywhere.
          </div>
        </div>
        <div className="table-entry">
          <div className="left-side">
            <h3>Tyler</h3>
            <p>Artist</p>
            <div className="avatar">
            <img src="https://i.imgur.com/2hakYvC.png" />
            </div>
          </div>
          <div className="right-side">
            Tyler is a full degen normie yuppie from the upper west side. He
            wears sperry topsiders and vineyard vines long sleeve tees and puts
            pomade in his hair and if you don't like it... well that's just too
            bad because his mind is a beautiful precious art studio that
            casually drops masterpieces on the reg.
          </div>
        </div>
        <div className="table-entry">
          <div className="left-side">
            <h3>Dudemyguy</h3>
            <p>Spirit Guide</p>
            <div className="avatar">
            <img src="images/dotdotdude.png" />
            </div>
          </div>
          <div className="right-side">
            Dudemyguy needs no intro but I'm gonna give him one anyway. If
            you've heard of a cryptocurrency, he has too. If you've bought an
            NFT, he was probably involved in the project. If he's not sharing
            magic mushrooms with a stranger on an airplane or doing calisthenics
            in the middle of a crowded restaurant, he's probably working behind
            the scenes, propping up your favorite de-fi project's operations
            department, saving your investment from complete disaster. So thank
            him when you get the chance.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
