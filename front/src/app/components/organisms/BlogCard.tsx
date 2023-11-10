import React from "react";
import jinx from "../../assets/jinx.jpg";
import Link from "next/link";
import BlogInfo from "../molecules/BlogInfo";

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
      <div
        className="image-container"
        style={{ backgroundImage: `url(${jinx.src})` }}
      ></div>
      <article>
        <BlogInfo label_1={subject} label_2={`${readTime} min read`} />
        <div className="link-container">
          <Link className={`link`} href="/">
            {title}
          </Link>
        </div>
        {!large && (
          <div className="description-container">
            <p className="description">{description}</p>
          </div>
        )}
        <BlogInfo withImage label_1={author} label_2={"18 jun, 2023"} />
      </article>
    </div>
  );
}

export default BlogCard;
