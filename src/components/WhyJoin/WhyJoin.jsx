import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

import "./WhyJoin.css";

import { VirginActiveBanner } from "../../assets";

const WhyJoin = () => {
  return (
    <div className="whyJoin">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="whyJoin_content"
      >
        <h1>WHY JOIN A VIRGIN ACTIVE GYM?</h1>
        <p>
          Get expert fitness advice and support to live an active lifestyle.
          Reach your fitness goals with our Personal Trainers, class
          instructors, Chiropractors, Physiotherapists, Biokineticists at our
          gyms. We have a membership to suit everyone.
          <br />
          <br />
          Enjoy world-class exercise equipment and facilities at our gyms
          conveniently located near you in Johannesburg, Pretoria, Cape Town,
          Durban, Bloemfontein, and throughout the rest of South Africa. We also
          have you covered at home with our expert online training at your
          fingertips.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="virginActiveBanner"
      >
        <img
          src={VirginActiveBanner}
          alt="VirginActiveBanner"
          className="banner"
        />
      </motion.div>
    </div>
  );
};

export default WhyJoin;
