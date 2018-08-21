import PropTypes from "prop-types";
import React from "react";

const Indicators = ({ }) => (
  <section id="top">
    <div className="cell">
      <div className="organelle-container">

        <div className="nucleus">
          <div className="nucleulus"></div>
        </div>

        <div className="mitochondria" id="mito1">
          <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q10,35 20,30 T30,35 t10,5 10,5 t5,5 15,5" fill="none" stroke="#EE7600" stroke-width="4" />
                        </svg>
        </div>

        <div className="mitochondria" id="mito2">
          <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q10,35 20,30 T30,35 t10,5 10,5 t5,5 15,5" fill="none" stroke="#EE7600" stroke-width="4" />
                        </svg>
        </div>

        <div className="mitochondria" id="mito3">
          <svg width="60" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q10,35 20,30 T30,35 t10,5 10,5 t5,5 15,5" fill="none" stroke="#EE7600" stroke-width="4" />
                        </svg>
        </div>

        <div className="lysosome-box">
          <div className="lysosome"></div>
        </div>

        <div className="lysosome-box" id="box1">
          <div className="lysosome"></div>
        </div>

        <div className="lysosome-box" id="box2">
          <div className="lysosome"></div>
        </div>

        <div className="cytoskeleton-green">
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path className="cytogreen1" d="M65 180 H 130" stroke="green" fill="transparent" stroke-width="3" />
            <path className="cytogreen1" d="M65 185 H 130" stroke="green" fill="transparent" stroke-width="3" />
            <path className="cytogreen2" d="M200 250 H 280" stroke="green" fill="transparent" stroke-width="3" />
            <path className="cytogreen2" d="M200 255 H 280" stroke="green" fill="transparent" stroke-width="3" />
            <path className="cytogreen3" d="M260 90 V 150" stroke="green" fill="transparent" stroke-width="3" />
            <path className="cytogreen3" d="M265 90 V 150" stroke="green" fill="transparent" stroke-width="3" />
          </svg>
        </div>

        <div className="cytoskeleton-blue">
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 30 Q 52.5 10, 95 50 T 130 80" stroke="blue" fill="transparent" stroke-width="4" />
            <path d="M30 50 Q 42.5 30, 85 60 T 120 100" stroke="blue" fill="transparent" stroke-width="4" />
          </svg>
        </div>

        <div className="cytoskeleton-blue2">
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 30 Q 52.5 10, 95 50 T 130 80" stroke="blue" fill="transparent" stroke-width="4" />
            <path d="M30 50 Q 42.5 30, 85 60 T 120 100" stroke="blue" fill="transparent" stroke-width="4" />
          </svg>
        </div>

        <div className="golgi"></div>
      </div>
    </div>

    <div className="tissue-container">
      <div className="tissue"></div>
    </div>

    <div className="organ-system-container">
      <div className="organ"></div>
      <div className="organ-system"></div>
    </div>

  </section>

);

export default Indicators;
