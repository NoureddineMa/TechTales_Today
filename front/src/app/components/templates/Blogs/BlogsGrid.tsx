import React from "react";
import BlogCard from "../../organisms/BlogCard";

function BlogsGrid() {
  return (
    <section className="blogs-grid-section">
      <BlogCard
        large
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        subject="Technology"
        readTime={15}
        author="Youssef Bouhalla"
        createdAt={new Date()}
      />
      <BlogCard
        large={false}
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim nobis numquam laudantium sint architecto et incidunt quisquam magni quidem asperiores officiis ea, quis eligendi? Eveniet et debitis aut corporis?"
        subject="Technology"
        readTime={15}
        author="Youssef Bouhalla"
        createdAt={new Date()}
      />
      <BlogCard
        large={false}
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim nobis numquam laudantium sint architecto et incidunt quisquam magni quidem asperiores officiis ea, quis eligendi? Eveniet et debitis aut corporis?"
        subject="Technology"
        readTime={15}
        author="Youssef Bouhalla"
        createdAt={new Date()}
      />
      <BlogCard
        large={false}
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim nobis numquam laudantium sint architecto et incidunt quisquam magni quidem asperiores officiis ea, quis eligendi? Eveniet et debitis aut corporis?"
        subject="Technology"
        readTime={15}
        author="Youssef Bouhalla"
        createdAt={new Date()}
      />
    </section>
  );
}

export default BlogsGrid;
