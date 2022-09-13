import React, { useRef } from "react";
import logo from "../../../../assets/images/logo.png";
import "./Header.scss";
const Header = () => {
  // console.log(styles);
  const mobileMenu = useRef(null);

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
                <a href="/portal">Portal</a>
              </li>
              <li>
                <a href="#kesfet">Keşfet</a>
              </li>
              <li>
                <a href="#">Topluluk</a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="log-in-button">
            <a href="/signin">Giriş Yap / Kayıt Ol</a>
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
              <a href="#">Portal</a>
            </li>
            <li>
              <a href="#">Keşfet</a>
            </li>
            <li>
              <a href="#">Topluluk</a>
            </li>
          </ul>
          <div className="log-in-button">
            <a href="/sigin">Giriş Yap / Kayıt Ol</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
