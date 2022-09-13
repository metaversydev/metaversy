import React from "react";
import "./Profilebanner.scss";
import Lottie from "lottie-react";
import animation from "../../../../assets/images/profile-banner-animation.json";
const Profilebanner = () => {
  return (
    <section className="profilebanner">
      <div className="container">
        <div className="row">
          <div className="content">
            <p>
              Kendini ifade edebilmen için basit <span>profil</span> sayfalarının yetmediğini gördük ve sana <br />{" "}
              koskoca bir <span>evren</span> <br /> verelim dedik.
            </p>
          </div>
          <div className="animation">
            <Lottie className="lottie" animationData={animation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profilebanner;
