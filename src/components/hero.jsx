import React from "react";
import photo from "/images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photo} alt="photo grid" className="hero--photo"/>

      <h1 className="hero--header">Online Experiences</h1>
      <p  className="hero--text">
        The effect of a good living comes with a good home find it here and join
        the good living
      </p>
    </section>
  );
}
