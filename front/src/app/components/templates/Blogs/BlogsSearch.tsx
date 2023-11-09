"use client";

import React, { useState, useEffect } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import Input from "../../atoms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function BlogsSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // here we can fetch for data
  }, [debouncedSearchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <section className="blogs_search_section">
      <h1>Our Blogs</h1>
      <p>A center for all our resources & insights</p>
      <Input
        value={searchTerm}
        placeholder="Search our blogs by topic or keyword"
        type="text"
        className="blogs_search_input"
        icon={<FontAwesomeIcon icon={faSearch} />}
        onChange={handleSearch}
      />
    </section>
  );
}

export default BlogsSearch;
