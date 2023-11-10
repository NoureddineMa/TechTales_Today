import BlogsGrid from "@/app/components/templates/Blogs/BlogsGrid";
import BlogsSearch from "@/app/components/templates/Blogs/BlogsSearch";
import React from "react";

function Blogs() {
  return (
    <>
      <main>
        <BlogsSearch />
        <BlogsGrid />
      </main>
    </>
  );
}

export default Blogs;
