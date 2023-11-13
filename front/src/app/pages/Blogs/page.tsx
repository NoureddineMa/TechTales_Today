import BlogsGrid from "@/app/components/templates/Blogs/BlogsGrid";
import BlogsList from "@/app/components/templates/Blogs/BlogsList";
import BlogsSearch from "@/app/components/templates/Blogs/BlogsSearch";
import NewsLetter from "@/app/components/templates/Blogs/NewsLetter";
import React from "react";

function Blogs() {
  return (
    <>
      <main>
        <BlogsSearch />
        <BlogsGrid />
        <BlogsList />
        <NewsLetter />
      </main>
    </>
  );
}

export default Blogs;
