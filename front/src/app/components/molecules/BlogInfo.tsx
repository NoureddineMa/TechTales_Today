import React from "react";
import jinx from "../../assets/jinx.jpg";

interface BlogInfoProps {
  withImage?: boolean;
  label_1: string;
  label_2: string;
}

function BlogInfo({ withImage, label_1, label_2 }: BlogInfoProps) {
  return (
    <div className="blog-info">
      {withImage && (
        <div className="blog-info-image">
          <img src={jinx.src} alt="jinx" />
        </div>
      )}
      <p className="content">
        {label_1}
        <span className="dot"></span>
        {label_2}
      </p>
    </div>
  );
}

export default BlogInfo;
