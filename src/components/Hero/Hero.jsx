import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

import "./Hero.css";

import { heroVideo1 } from "../../assets";

const Hero = () => {
  return (
    <div className="hero_video">
      <div className="overlay"></div>
      <video src={heroVideo1} autoPlay loop muted className="heroVideo1" />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="hero_content"
      >
        <h1>EVERY BODY HAS A REASON</h1>
        <div className="hero_buttons">
          <motion.button
            className="hero_button_join"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
          >
            Join Now
          </motion.button>
          <motion.button
            className="hero_button_find"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}
          >
            Find Yours
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
