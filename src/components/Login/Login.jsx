import React from "react";
import "./Login.css";
import cta1 from "./cta-logo-one.svg";
import cta2 from "./cta-logo-two.png";

export default function Login() {
  return (
    <div className="container">
      <div className="content">
        <div className="cta">
          <img className="ctalogoOne" src={cta1} alt="cta-one" />
          <button className="Signup">GET ALL THERE</button>
          <p className="decription">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className="ctalogoTwo" src={cta2} alt="cta2"/>
        </div>
        <div className="BgImage" />
      </div>
    </div>
  );
}
