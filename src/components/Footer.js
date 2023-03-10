import React from "react";
import styles from "./Footer.module.css";
import twitterLogo from "../assets/Twitter-logo.png";
import githubLogo from "../assets/Github-logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/dylanquaale"
        >
          <img
            src={githubLogo}
            alt="My Github"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://twitter.com/DylanRQuaale"
        >
          <img
            src={twitterLogo}
            alt="My Twitter"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}
