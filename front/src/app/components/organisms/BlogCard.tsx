import React from "react";
import jinx from "../../assets/jinx.jpg";

interface BlogCardProps {
  large: boolean;
  title: string;
  description?: string;
  subject: string;
  readTime: number;
  author: string;
  createdAt: Date;
}

function BlogCard({
  large,
  title,
  description,
  subject,
  readTime,
  author,
  createdAt,
}: BlogCardProps) {
  return (
    <div className={`blog-card ${large ? "blog-card-lg" : "blog-card-sm"}`}>
      <div className="image-container">
        <img src={jinx.src} alt="jinx" />
      </div>
    </div>
  );
}

export default BlogCard;
