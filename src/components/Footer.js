import './Footer.css';
import React from 'react'
import { ReactComponent as TwitterLogo } from '../assets/twitter.svg'
import { ReactComponent as OpenseaLogo } from '../assets/opensea.svg'
import { ReactComponent as EtherscanLogo } from '../assets/etherscan.svg'
import { ReactComponent as DiscordLogo } from '../assets/discord.svg'

const Footer = () => {

  return (
    <section id="footer" className="footer-container" data-aos="flip-down" data-aos-offset="-1000">
      <div>
        <a href="https://discord.gg/dX9Y5fSA" target="_blank" rel="noreferrer"><DiscordLogo className="logo"></DiscordLogo></a>
        <a href="https://twitter.com/tasty_apes" target="_blank" rel="noreferrer"><TwitterLogo className="logo"></TwitterLogo></a>
        <a href="https://opensea.io/collection/tastyapes" target="_blank" rel="noreferrer"><OpenseaLogo className="logo"></OpenseaLogo></a>
        <a href="https://etherscan.io/address/0xf190c384Bb65992e02c2C81786d5cD77B5F19A3e" target="_blank" rel="noreferrer"><EtherscanLogo className="logo"></EtherscanLogo></a>
      </div>
      <p className="footer">© Copyright 2022 • Tasty Apes • All rights reserved</p>
    </section>
  );
}

export default Footer;
