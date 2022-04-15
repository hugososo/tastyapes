import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'
import SupplyContextWrapper from './context/supplyContextWrapper';

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <SupplyContextWrapper>
        <div id="bg"></div>
        <div className="App">
          <Nav></Nav>
          <Main></Main>
          <About></About>
          <Roadmap></Roadmap>
          <Team></Team>
          <Footer></Footer>
        </div>
      </SupplyContextWrapper>
    </>
  );
}

export default App;
