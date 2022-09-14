import React from "react";
import "./Firstbanner.scss";
import configs from "../../../../utils/configs";
import TypeWriterEffect from "../components/textAnimation";
const Firstbanner = () => {
  return (
    <section className="firstbanner">
      <div className="container">
        <div className="row">
          <h1>
            Biliyoruz ki, <br /> sen de iki boyutlu sosyal <br /> medya platformlarından <br />
            <TypeWriterEffect
              startDelay={100}
              cursorColor="white"
              multiText={["sıkıldın.", "bunaldın.", "yoruldun."]}
              typeSpeed={100}
              multiTextLoop={true}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Firstbanner;
