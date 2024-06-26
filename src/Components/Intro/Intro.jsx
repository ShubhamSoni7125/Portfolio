import React from "react";
import "./Intro.css";
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Shubham Soni</span>
          <span>
            Passionate frontend developer dedicated to creating sleek,
            user-centric interfaces. Transforming visions into reality through
            elegant design and efficient code.
          </span>
        </div>

        <div className="i-button-container">
          <Link to="contact-form" spy={true} smooth={true}>
            <button className="button i-button">Hire me</button>
          </Link>
        </div>

        <div className="i-icons">
          <a href="https://github.com/ShubhamSoni7125">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-soni-083591195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/mr_._soni?igsh=OGdqOTM4OG95Z2w2">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" id="Vector1" />
        <img src={Vector2} alt="" id="Vector2" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "2.4rem" }}
          transition={transition}
          style={{ top: "18rem", left: "2.4rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="One of the" txt2="Best Designs" />
        </motion.div>
        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
