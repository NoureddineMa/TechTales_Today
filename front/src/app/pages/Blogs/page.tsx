import BlogsGrid from "@/app/components/templates/Blogs/BlogsGrid";
import BlogsList from "@/app/components/templates/Blogs/BlogsList";
import BlogsSearch from "@/app/components/templates/Blogs/BlogsSearch";
import React from "react";

function Blogs() {
  return (
    <>
      <main>
        <BlogsSearch />
        <BlogsGrid />
        <BlogsList />
      </main>
    </>
  );
}

export default Blogs;
