import React from "react";
import "./Home.css";
import ferrisWheel from '../../videos/ferris.mp4';

function Home() {
  return (
    <div className="main">
      <h1>Welcome To Plasma Beach</h1>
      <video autoplay="autoplay" muted loop="loop" id="video-welcome">
        <source src={ferrisWheel} type="video/mp4" />
  

      </video>
      <div className="top-section">
        <div className="top-section-inner">
      <h3 className="intro-p"> The World’s first crowd-sourced, NFT-based cartoon show</h3>


      <p>
      <span className="first">
        Plasma Beach is a sleepy beachside community located in the caudate lobe
        of some guy’s liver. 
      </span>

        &nbsp;  All the happenings, all the drama, all the trials and tribulations our characters will endure will all happen at the
        microscopic level. Like the Magic School Bus or that one episode of Rick
        and Morty. We already have the plot for 4 seasons of animated adventures
        but we need you to help us build the narrative! (And raise the money)
      </p>
      <p>
        All of our NFTs will double as membership cards to access our
        stakeholders area in the discord server. All stakeholders will get a say
        in how the story unfolds in Plasma Beach and will be able to offer
        feedback in real time as the show is being made.
      </p>

      <p>
        Stakeholders will also be rewarded with profit sharing at every phase
        where profit happens. Here at Plasma Beach, our business model is
        simple, we sell NFTs to raise money to make a cartoon show. And we use
        the community to crowdsource and curate ideas along the way. That means
        that if you buy a Plasma Beach NFT, you are investing in the ground
        floor of this project and we intend to reward you as such. We beileve in
        rewarding our existing stakeholders every time we successfully launch a
        new collection of NFTs. And most importantly, if we succeed in making a
        cartoon show that becomes popular and profitable, we will give the
        profit back to our stakeholders.
      </p>

      </div>


      </div>

      <br />

      <div className="roadmap">
        <h1> Roadmap </h1>

        <h3>Phase 1</h3>
        <p>
          We will release a limited collection of 333 character NFTs who are
          relevant to season 1. These are the main characters and their friends
          and family. Each character will have a few variations in appearance
          and/or outfit that will be generative, but each character will be
          individually designed and created. The relative popularity of each NFT
          in this collection will inform us how much screen time to give each
          character, and may influence their final appearance/outfit, or even
          the role they get cast in.
        </p>
        <h3>Phase 2</h3>
        <p>
          We will release another limited collection, this time of narrative
          nuggets. These are cliches, narrative tropes, plot-twists, or comedic
          bits you’ve seen in a million movies and shows before. Some are old
          cliches - tried and true - and some are newer and still spicy, but all
          will be in the mix to be incorporated into the story. The popularity
          of each NFT in this collection will determine whether each narrative
          nugget makes the final cut. Some will be images, some gifs, and some
          gifs with sound. Anyone holding an NFT from phase 1 will receive
          royalties on this collection.
        </p>
        <h3>Phase 3</h3>
        <p>
          We will release Season 1 in graphic novel format. Each scene from Book
          1 will be made into an NFT. All stakeholders holding any Plasma Beach
          NFT from Phase 1 or 2 will receive a scene from Book 1 for free. This
          complimentary NFT will give you access to see the entire graphic novel
          here on the PB Website. Anyone who is not holding a Plasma Beach NFT
          will be able to view Book 1 in a separate area of the website, but
          they will need to watch ads to unlock all the scenes from the novel.
          Ad revenue from this area of the website will be distributed to
          wallets holding a scene from Book 1. But you must host your scene in
          order to collect! Details to come…
        </p>

        <h3>Phase 4</h3>
        <p>
          We will release a collection of generative character NFTs who cannot
          be revealed until after the release of the graphic novel because of
          spoilers. All current stakeholder will be whitelisted prior to
          minting. All current stakeholders will also receive royalties on this
          collection as well.
        </p>

        <h3>Phase 5</h3>
        <p>
          We will release a limited collection of music videos, animated shorts
          and trailors for the animated version of season 1, each contracted
          with a different team of animators & artists. The relative popularity
          of the NFTs in this collection will help inform us which team to
          contract for the show.
        </p>
        <h3>Phase 6</h3>
        <p>
          Season 1. It’ll be a cartoon show available to stream on our website,
          using any Plasma Beach NFT to gain access, and stakeholders will be
          able to share access with friends as well. Any ad revenue we make off
          the show will be given back to the stakeholders. (unless we make like
          a hundred million dollars in which case we'll pay ourselves a
          reasonable salary for a team that just turned $100 million profit)
        </p>
        <h3>Phase 7</h3>
        <p>Make a roadmap for season 2. We got 4 seasons of this.</p>
      </div>
    </div>
  );
}

export default Home;
