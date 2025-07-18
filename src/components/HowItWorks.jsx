import React from "react";
import "../stylesheets/HowItWorks.css";

const HowItWorks = React.memo(function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="howitworks-placeholder">[How it works steps will go here]</div>
    </section>
  );
});
export default HowItWorks; 