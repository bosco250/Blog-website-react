import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from './SideBar'

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      //filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  //page Changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="">
      {/* category section  */}
      <div>
        <CategorySelection onSelectedCategory={handleCategoryChange} activeCategory={activeCategory}  selectedCategory={selectedCategory}/>
      </div>

      {/* blogcard Section  */}
      <div className=" flex flex-col lg:flex-row gap-12">
        {/* blog card component */}
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        {/* sideBar Component */}
        <div>
          <SideBar/>
        </div>
      </div>

      {/* blog pagination  */}
      <div className="">
        <Pagination
          onPageChange={handlePageChange}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default BlogPage;
