import Link from "next/link";
import React from "react";

interface SocialMediaButtonProps {
  link: string;
  className?: string;
  icon: React.ReactNode;
}

function SocialMediaButton({ link, className, icon }: SocialMediaButtonProps) {
  return (
    <Link className={`social-media-button ${className}`} href={link}>
      {icon}
    </Link>
  );
}

export default SocialMediaButton;
