import './Roadmap.css';
import React from 'react'

const Roadmap = () => {

  const roadmaps = [
    {
      "percent": "15% sold",
      "content": "Opening of our exclusive discord space for our community for future access to perks and partnerships"
    },
    {
      "percent": "30% sold",
      "content": "Giveaway Raffle for all Tasty Apes holders! Prizes include ETH and Whitelists to other projects"
    },
    {
      "percent": "50% sold",
      "content": "Partnership with Rarity Tools for official rarity ranking. "
    },
    {
      "percent": "75% sold",
      "content": "5 ETH from the project wallet will be spent for a floor sweep! No paperhands will survive!"
    },
    {
      "percent": "Sold Out",
      "content": "At 100% sales our team will start making official merch for all supporters. We will also donate 10% of our minted sales profit to food bank and feed people in need. We aim to share love to the world through the power of a heart-warming meal by helping out people who suffer from hunger. There are also tons of exciting privileges for our holders in the long run. Stay tuned!"
    },

  ];

  return (
    <section id="roadmap" className="roadmap-container">
      <div className="content-container">
        <h1 className="title" data-aos="flip-down" data-aos-offset="-9000">Roadmap</h1>
        <div className="roadmap-wrapper">
          {
            roadmaps.map((item, index) => {
              return (
                <div className="roadmap-item" key={index} data-aos="fade-right" data-aos-offset={25 * (index + 1)}><span className="roadmap-percent">{item.percent} - </span><span className="roadmap-content">{item.content}</span></div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
