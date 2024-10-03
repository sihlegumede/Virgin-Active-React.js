import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

import "./Memberships.css";

const Memberships = () => {
  return (
    <div className="Memberships">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="Memberships_header"
      >
        <h3>Memberships</h3>
        <h1>For every kind of fit</h1>
        <p>Choose a membership that works out for you.</p>
      </motion.div>
      <div className="Memberships_cards">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          whileHover={{ scale: 0.9 }}
          className="Memberships_box"
        >
          <h1>Premier</h1>
          <p>Access any club, at any time (except luxury destinations)</p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          whileHover={{ scale: 0.9 }}
          className="Memberships_box"
        >
          <h1>Club</h1>
          <p>
            Have one club to call home and choose between full access or
            off-peak times.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          whileHover={{ scale: 0.9 }}
          className="Memberships_box"
        >
          <h1>Collection</h1>
          <p>
            Full access to all our clubs and luxury wellness destinations
            worldwide.
          </p>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="Memberships_button_explore"
      >
        Explore all options
      </motion.button>
    </div>
  );
};

export default Memberships;
