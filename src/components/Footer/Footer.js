import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes["footer"]}>
        <div className={classes["footer-icons"]}></div>
        <div className={classes["footer-links-section"]}>
          <div className={classes['footer-links']}>
            <ul className={classes['footer-link']}>
              <li>
                <span>Audio and Subtitles</span>
              </li>
              <li>
                <span>Media Center</span>
              </li>
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
          <div className={classes['footer-links']}>
            <ul className={classes['footer-link']}>
              <li>
                <span>Audio Description</span>
              </li>
              <li>
                <span>Investor Relations</span>
              </li>
              <li>
                <span>Legal Notices</span>
              </li>
            </ul>
          </div>
          <div className={classes['footer-links']}>
            <ul className={classes['footer-link']}>
              <li>
                <span>Help Center</span>
              </li>
              <li>
                <span>Jobs</span>
              </li>
              <li>
                <span>Cookie Preferences</span>
              </li>
            </ul>
          </div>
          <div className={classes['footer-links']}>
            <ul className={classes['footer-link']}>
              <li>
                <span>Terms of Use</span>
              </li>
              <li>
                <span>Legal Notices</span>
              </li>
              <li>
                <span>Corporate Information</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["footer-service-code"]}>
          <span>707-754</span>
        </div>
        <div className={classes["footer-copyright"]}>
          <span>copyright ....</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
