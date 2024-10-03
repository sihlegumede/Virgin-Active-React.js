import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

import "./GymClasses.css";

import {
  DiamondGrid1,
  DiamondGrid2,
  DiamondGrid3,
  DiamondGrid4,
  DiamondGrid5,
  padelCourts,
  kidsGym,
  carousel3,
} from "../../assets";

const GymClasses = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="gymClasses"
    >
      <h3>Memberships</h3>
      <h1>For every kind of fit</h1>
      <p>Choose a membership that works out for you.</p>
      <div className="classes">
        <img src={DiamondGrid1} alt="DiamondGrid1" />
        <img src={DiamondGrid2} alt="DiamondGrid2" />
        <img src={DiamondGrid3} alt="DiamondGrid3" />
        <img src={DiamondGrid4} alt="DiamondGrid4" />
        <img src={DiamondGrid5} alt="DiamondGrid5" />
        <img src={padelCourts} alt="padeCourts" />
        <img src={kidsGym} alt="kidsGym" />
        <img src={carousel3} alt="carousel3" />
      </div>
    </motion.div>
  );
};

export default GymClasses;
