import React from "react";
import './accordian.css'
import { faqdata } from "../data/data.js";
const Accordian = () => {
  
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {
          faqdata.map((faqdata)=>{
            const targetId = `#${faqdata.target}`
            return <div className="accordion-item">
            <h2 className="accordion-header text-center" id={faqdata.id}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={targetId}
                aria-expanded="false"
                aria-controls={faqdata.target}
              >
                {faqdata.q}
              </button>
            </h2>
            <div
              id={faqdata.target}
              className="accordion-collapse collapse"
              aria-labelledby={faqdata.id}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-center">
                {faqdata.a}
              </div>
            </div>
          </div>
          })
        }
      </div>
    </>
  );
};

export default Accordian;
