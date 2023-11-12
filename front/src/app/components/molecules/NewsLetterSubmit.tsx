"use client";

import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Button from "../atoms/Button";

function NewsLetterSubmit() {
  const [email, setEmail] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <div className="newsletter-submit-form">
      <Input
        value={email}
        placeholder="Your email address"
        type="text"
        className="blogs-search-input"
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        onChange={handleEmail}
      />
      <Button content="Subscribe" isPrimary={true} />
    </div>
  );
}

export default NewsLetterSubmit;
