import { motion } from "framer-motion";

import "./Footer.css";

import { logo } from "../../assets";

import {
  FaAndroid,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="navbar_logo" />
      <div className="footer_links">
        <div className="footer_links_row">
          <h2>COMPANY</h2>
          <a href="#">Contact Us</a>
          <a href="#">Member FAQs</a>
          <a href="#">Careers</a>
          <a href="#">Work as a PT</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer_links_row">
          <h2>RED HOT</h2>
          <a href="#">Wellness Experts</a>
          <a href="#">Pickleball</a>
          <a href="#">Padel</a>
          <a href="#">VR Gym Tour</a>
          <a href="#">Learn to Swim</a>
        </div>
        <div className="footer_links_row">
          <br />

          <a href="#">Workplace Wellness</a>
          <a href="#">Club-V Kids Gym</a>
          <a href="#">Memberships</a>
          <a href="#">Personal Trainers</a>
          <a href="#">Learn to Swim</a>
        </div>
        <div className="footer_links_row">
          <h2>APP & REWARDS</h2>
          <a href="#">Virgin Active Rewards</a>
          <a href="#">Virgin Active App</a>
          <a href="#">Rewards Partners</a>
        </div>
        <div className="footer_links_button">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaAndroid />
            Download app on Android
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaApple />
            Download app on iPhone
          </motion.button>
        </div>
      </div>
      <div className="footer_tags">
        <div className="socialMedia">
          <h2>FOLLOW VIRGIN ACTIVE</h2>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer_copyrights">
        Copyright 2024 Virgin Active. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
