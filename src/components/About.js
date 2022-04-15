import './About.css';
import React from 'react'
import food from '../assets/food.gif'

const About = () => {

  return (
    <section id="about" className="about-container">
      <div className="intro-container" data-aos="flip-down" data-aos-offset="-9000">
        <br/>
        <img src={food} alt="food" className="food" />
        <h1 className="title">What are TastyApes?</h1>
        <p className="intro">
          TastyApes is a collection of 5555 uniquely generated hand drawn art, three 1:1s are ready to pick up, celebrating the heart-warming love of food through the fusion of tasty food and ape bones.
          This project is inspired by but not affiliated with BAYC and Tasty Bones.
        </p>
      </div>
    </section>
  );
}

export default About;
