import React, { useState } from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={
        colorChange
          ? classes["header-container"] + " " + classes["header-container-bc"]
          : classes["header-container"]
      }
    >
      <div className={classes["navbar"]}>
        <div className={classes["navbar-first"]}>
          <a className={classes["navbar-brand-image"]}>Netflix</a>
          <ul className={classes["navbar-first-links"]}>
            <li className={classes["navbar-first-link"]}>
              <a>Home</a>
            </li>
            <li className={classes["navbar-first-link"]}>
              <a>TV Shows</a>
            </li>
            <li className={classes["navbar-first-link"]}>
              <a>Movies</a>
            </li>
            <li className={classes["navbar-first-link"]}>
              <a>New & Popular</a>
            </li>
            <li className={classes["navbar-first-link"]}>
              <a>My List</a>
            </li>
          </ul>
        </div>
        <div className={classes["navbar-second"]}>
          <ul className={classes["navbar-second-links"]}>
            <li className={classes["navbar-second-link"]}>
              <span className={classes["navbar-icons"]}>
                <img src="icons/search_white_24dp.svg" />
                <input
                  type="text"
                  className={classes["navabar-second-search-input"]}
                  placeholder="Titles, People, Genres"
                />
              </span>
            </li>
            <li className={classes["navbar-second-link"]}>
              <span className={classes["navbar-icons"]}>
                <img src="icons/notifications_white_24dp.svg" />
              </span>
            </li>
            <li className={classes["navbar-second-link"]}>
              <span className={classes["navbar-icons"]}>
                <img src="icons/storage_white_24dp.svg" />
                <img
                  src="icons/arrow_drop_down_white_24dp.svg"
                  className={classes["display-arrow-down-icon"]}
                />
                <div className={classes["manage-profile"]}>
                  <ul className={classes["manage-profile-lists"]}>
                    <li className={classes["manage-profile-list"]}>
                      <span>
                        <img src="icons/portrait_white_24dp.svg" />
                        <a>Chirag</a>
                      </span>
                    </li>
                    <li className={classes["manage-profile-list"]}>
                      <span>
                        <img src="icons/portrait_white_24dp.svg" />
                        <a>Ankita</a>
                      </span>
                    </li>
                    <li className={classes["manage-profile-list"]}>
                      <span>
                        <img src="icons/portrait_white_24dp.svg" />
                        <a>Venky</a>
                      </span>
                    </li>
                    <li className={classes["manage-profile-list"]}>
                      <span>
                        <img src="icons/portrait_white_24dp.svg" />
                        <a>Urvashi</a>
                      </span>
                    </li>
                  </ul>
                  <hr />
                  <ul className={classes["manage-profile-other-links"]}>
                    <li className={classes["manage-profile-other-link"]}>
                      <a>Account</a>
                    </li>
                    <li className={classes["manage-profile-other-link"]}>
                      <a>Help </a>
                    </li>
                    <li className={classes["manage-profile-other-link"]}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </span>
            </li>
            <li className={classes["navbar-second-link"]}>
              <span className={classes["navbar-icons"]}>
                <img src="icons/list_alt_white_24dp.svg" />
                <img
                  src="icons/arrow_drop_down_white_24dp.svg"
                  className={classes["display-arrow-down-icon"]}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
