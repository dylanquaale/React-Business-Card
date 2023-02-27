import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Profile-Picture.png";
import emailLogo from "../assets/Email-logo.png";
import linkendinLogo from "../assets/LinkedIn-logo.png";

export default function Info() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            className={styles.avatar}
            src={ProfilePicture}
            alt=""
          />
        </header>
        <div className={styles.bio}>
          <h1 className={styles.name}>Dylan Quaale</h1>
          <p className={styles.title}>Software Developer</p>
          <p className={styles.small}>(website coming soon)</p>
          <div className={styles.contacts}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.links} ${styles.email}`}
              href="mailto:tashasyarifah@outlook.com"
            >
              <img className={styles.icons} src={emailLogo} alt="" /> Email
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.links} ${styles.linkedin}`}
              href="https://www.linkedin.com/in/dylan-quaale-2885881a4/"
            >
              <img className={styles.icons} src={linkendinLogo} alt="" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
  