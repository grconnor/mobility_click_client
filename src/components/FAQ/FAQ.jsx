// Library Imports:
import "./faq.css";
import React from "react";

// Component Imports:

// Image Imports:

function FAQ ({faq, index, toggleFAQ}) {
  // console.log("faq:", faq.question)
  return (
    <>
      <div className={"faq " + (faq.open ? "open" : "")} key={index} onClick={() => toggleFAQ(index)}>
        <div className="faq-question">
          {faq.question}
        </div>
        <div className="faq-answer">
          {faq.answer}
        </div>
      </div>
    </>
  )
}

export default FAQ;
