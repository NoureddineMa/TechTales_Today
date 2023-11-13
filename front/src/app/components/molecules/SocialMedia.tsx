import React from "react";
import SocialMediaButton from "../atoms/SocialMediaButton";
import Facebook from "../../assets/svg/facebook.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Whatsapp from "../../assets/svg/whatsapp.svg";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <SocialMediaButton link="google.com" icon={<Facebook />} />
      <SocialMediaButton link="google.com" icon={<Instagram />} />
      <SocialMediaButton link="google.com" icon={<Twitter />} />
      <SocialMediaButton link="google.com" icon={<Whatsapp />} />
    </div>
  );
}

export default SocialMedia;
