import React from "react";
import BlogCard from "../../organisms/BlogCard";
import Button from "../../atoms/Button";

function BlogsList() {
  return (
    <section className="blogs-list-section">
      <h3 className="title">All blog post</h3>
      <div className="blogs-list">
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
      </div>
      <Button content="laod more" isPrimary={false} />
    </section>
  );
}

export default BlogsList;
