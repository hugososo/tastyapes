import './Team.css';
import React from 'react'
import kara from '../assets/kara.png'
import ceres from '../assets/ceres.png'

const Team = () => {


  return (
    <section id="team" className="team-container">
      <div className="content-container"  data-aos="fade-up" data-aos-offset="400">
      <h1 className="title">Team</h1>
        <div className="team-container">
          <div className="team-item" style={{backgroundColor:"rgb(129, 197, 102)"}}>
            <img className="team-image" src={ceres} alt="Ceres" />
            <div className="team-info">
              <h2 className="team-name">Ceres</h2>
              <h3 className="team-pos">Artist</h3>
            </div>
          </div>
          <div className="team-item" style={{backgroundColor:"rgb(255, 137, 137)"}}>
            <img className="team-image" src={kara} alt="Kara" />
            <div className="team-info">
              <h2 className="team-name">Kara</h2>
              <h3 className="team-pos">Dev</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
