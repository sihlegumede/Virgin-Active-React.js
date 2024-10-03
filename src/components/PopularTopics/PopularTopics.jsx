import { motion } from "framer-motion";
import { fadeIn } from "../../utility/motion";

import "./PopularTopics.css";

import { PopularTopics1 } from "../../assets";
import { grid1, grid2 } from "../../constants";

const PopularTopics = () => {
  return (
    <div className="popular_topics">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Popular topics
      </motion.h1>
      <div className="popular_topics_buttons">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Body
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Community
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Kids
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Mind
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Yoga
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Recovery
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Personal training
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Holidays
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Work
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Workout of the day
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Food
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Gyms
        </motion.button>
      </div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="popular_topics_grid1"
      >
        <div className="overlay"></div>
        <img src={PopularTopics1} alt="PopularTopics1" />
        <div className="popular_topics_grid_content">
          <h4>NUTRITION</h4>
          <h1>Dietitians in South Africa - Everything you need to know</h1>
          <button>Read More</button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="popular_topic_grid2"
      >
        {grid1.map((firstGrid) => (
          <div key={firstGrid.id} className="grid_item">
            <img src={firstGrid.image} alt={firstGrid.alt} />
            <h3>{firstGrid.title}</h3>
            <h1>{firstGrid.heading}</h1>
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="popular_topic_grid2"
      >
        {grid2.map((secondGrid) => (
          <div key={secondGrid.id} className="grid_item">
            <img src={secondGrid.image} alt={secondGrid.alt} />
            <h3>{secondGrid.title}</h3>
            <h1>{secondGrid.heading}</h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularTopics;
