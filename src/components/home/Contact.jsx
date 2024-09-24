import React from "react";
import { CallToAction } from "../buttons";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "../../styles/home/contact.module.scss";
import { SectionWrapper } from "@/hoc";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant, zoomIn } from "@/utils/motion";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <motion.h1 variants={textVariant()}>Contact Us</motion.h1>

        {/* form */}
        <motion.form
          variants={fadeIn("up", "spring", 0.3, 1.25)}
          className={styles.form}
        >
          <div className={styles.inputContainer}>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>

          <div className={styles.inputContainer}>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>

          <div className={styles.inputContainer}>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <div className={styles.submitBTN}>
            <CallToAction type="submit">Send Message</CallToAction>
          </div>
        </motion.form>
      </div>

      {/* socials */}
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 1.25)}
        className={styles.socials}
      >
        <a href="https://www.instagram.com/acetrixofficial/?igsh=MWN4c2Y4NW1qOGhzOA%3D%3D">
          <FaInstagram />
        </a>
        <a href="https://discord.com/invite/kCVCtEVs4f">
          <FaDiscord />
        </a>
        <a href="https://www.youtube.com/@acetrix2022">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/acetrix/">
          <FaLinkedin />
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
