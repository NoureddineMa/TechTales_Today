import React from "react";
import Input from "../atoms/Input";

function BlogsSearch() {
  return (
    <section className="blogs_search_section">
      <h1>Our Blogs</h1>
      <p>A center for all our resources & insights</p>
      <Input
        placeholder="Search our blogs by topic or keyword"
        type="text"
        className="blogs_search_input"
      />
    </section>
  );
}

export default BlogsSearch;
