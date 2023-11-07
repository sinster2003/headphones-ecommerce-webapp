import React from 'react';
import {  AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer-div">
      <p>Copyrights reserved Phoenix Headphones 2023</p>
      <div className="icons">
        <AiFillInstagram className="insta"/>
        <AiOutlineTwitter className="twitter"/>
      </div>
    </div>
  )
}

export default Footer;