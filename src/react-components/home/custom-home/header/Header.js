import React, { useContext, useRef } from "react";
import logo from "../../../../assets/images/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import maskEmail from "../../../../utils/mask-email";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import configs from "../../../../utils/configs";

import { AppLogo } from "../../../misc/AppLogo";
const Header = () => {
  // console.log(styles);
  const mobileMenu = useRef(null);
  const auth = useContext(AuthContext);
  const email = auth.email;
  const openMobileMenu = () => {
    if (mobileMenu.current != null) {
      mobileMenu.current.classList.toggle("opened-menu");
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="menu">
            <ul>
              <li>
                <a target="_blank" href="https://metaversy.link/spoke">
                  Tasarla
                </a>
              </li>
              <li>
                <a href="/#kesfet">Keşfet</a>
              </li>
              <li>
                <a href="https://discord.gg/GEGHgwgbVR" target="_blank">
                  Topluluk
                </a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <AppLogo />
          </div>
          <div className="log-in-button">
            {auth.isSignedIn ? (
              <div>
                <span style={{ marginRight: "10px" }}>
                  <FormattedMessage
                    id="header.signed-in-as"
                    defaultMessage="Signed in as {email}"
                    values={{ email: maskEmail(email) }}
                  />
                </span>
                <a href="#" onClick={auth.signOut}>
                  <FormattedMessage id="header.sign-out" defaultMessage="Sign Out" />
                </a>
              </div>
            ) : (
              <a href="/signin">
                <FormattedMessage id="sign-in-button" defaultMessage="Sign In / Sign Up" />
              </a>
            )}
          </div>
          <div className="mobile-hamburger" onClick={openMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="mobile-menu" ref={mobileMenu}>
          <ul>
            <li>
              <a target="_blank" href="https://metaversy.link/spoke">
                Tasarla
              </a>
            </li>
            <li>
              <a href="/#kesfet">Keşfet</a>
            </li>
            <li>
              <a href="https://discord.gg/GEGHgwgbVR" target="_blank">
                Topluluk
              </a>
            </li>
          </ul>
          <div className="log-in-button">
            {auth.isSignedIn ? (
              <div>
                <p style={{ fontWeight: "bold" }}>{maskEmail(email)}</p>
                <div style={{ marginTop: "15px" }}>
                  <a style={{ display: "inline-block" }} href="#" onClick={auth.signOut}>
                    <FormattedMessage id="header.sign-out" defaultMessage="Sign Out" />
                  </a>
                </div>
              </div>
            ) : (
              <a href="/signin">
                <FormattedMessage id="sign-in-button" defaultMessage="Sign In / Sign Up" />
              </a>
            )}
          </div>
        </div>
      </div>
      {auth.isSignedIn && auth.isAdmin ? (
        <div className="admin-menu">
          <a href="/admin" rel="noreferrer noopener">
            <i>
              <FontAwesomeIcon icon={faEdit} />
            </i>
          </a>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
