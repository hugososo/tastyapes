import './Main.css';
import Mint from './Mint'
import React, { useEffect, useRef } from 'react'
import tastyapes1 from '../assets/tastyapes1.png'
import tastyapes2 from '../assets/tastyapes2.png'
import tastyapes3 from '../assets/tastyapes3.png'
import tastyapes4 from '../assets/tastyapes4.png'
import tastyapes5 from '../assets/tastyapes5.png'
import tastyapes6 from '../assets/tastyapes6.png'
import tastyapes from '../assets/topic.png'
import useWindowDimensions from '../useWindowDimension'

const Main = () => {

  const { height, width } = useWindowDimensions();

  const image = useRef([]);

  const images = [
    tastyapes1,
    tastyapes2,
    tastyapes3,
    tastyapes4,
    tastyapes5,
    tastyapes6
  ]

  let count = 0;

  const loopImage = () => {
    count = 0;
    setInterval(() => {
      image.current[(count) % images.length].style.visibility = 'hidden'
      image.current[(count + 1) % images.length].style.visibility = 'visible'
      count++;
    }, 200)
  }

  useEffect(() => {
    loopImage();
  },[])

  return (
    <section id="mint" className="main-container" data-aos="zoom-in" data-aos-duration="1000">
      <div className="main-wrapper">
      {width<=768 && <img src={tastyapes} alt="tastyapes" className="title-img"></img>}
        <div className="image-container">
          {
            images.map((item, i) => (
              <img key={"tastyapes" + i} className="image" ref={el => image.current[i] = el} src={item} alt={"tastyapes" + i} />
            ))
          }
        </div>
        <div className="mint-container">
          {width>=768 && <img src={tastyapes} alt="tastyapes" className="title-img"></img>}
          <Mint></Mint>
        </div>
      </div>
    </section>
  );
}

export default Main;
