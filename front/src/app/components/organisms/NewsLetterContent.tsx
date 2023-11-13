import React from "react";
import NewsLetterSubmit from "../molecules/NewsLetterSubmit";
import Illustration from "../../assets/svg/illustration.svg";

function NewsLetterContent() {
  return (
    <div className="newsletter-content">
      <div className="submit-section">
        <h4>Weekly Newsletter</h4>
        <p>Get blog aticles and offers via emails</p>
        <NewsLetterSubmit />
      </div>
      <Illustration />
    </div>
  );
}

export default NewsLetterContent;
