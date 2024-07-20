import React from "react";
import BlogPage from "../assets/components/BlogPage";

const Blogs = () => {
  return (
    <div className="">
      <div className="py-40 bg-black text-center text-white px-4 ">
        <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h1>
      </div>
      {/* all blogs conatiner */}
      <div className="max-w-7xl md:mx-20 my-0 ">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
