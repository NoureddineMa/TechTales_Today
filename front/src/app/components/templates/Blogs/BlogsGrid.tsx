import React from "react";
import BlogCard from "../../organisms/BlogCard";

function BlogsGrid() {
  return (
    <section className="blogs_grid_section">
      <BlogCard
        large
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        subject="Technology"
        readTime={15}
        author="Youssef Bouhalla"
        createdAt={new Date()}
      />
    </section>
  );
}

export default BlogsGrid;
