import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filterdedBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  // console.log(filterdedBlogs);
  return (
    <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
      {filterdedBlogs.map((blog) => (
        <Link to={`blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div className="">
            <img src={blog.image} alt={blog.tittle} className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2  text-gray-500">
            <FaUser className="inline-flex mr-2 items-center" />
            {blog.author}
          </p>
          <p className=" text-gray-500 text-sm">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
