import React, {useState, useEffect } from "react";
import { FaArrowRight} from "react-icons/fa6"
import { Link } from 'react-router-dom';


const SideBar = () => {
  const[popularBlogs,setPopularBlogs]=useState([])
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  },[]);
  return ( <div>
    <div className="">
      <h3 className=" text-xl font-semibold px-4">Latest Blog</h3>
      <div className="">
        {
          popularBlogs.slice(0,5).map((blog)=>(
            <div className=" my-5 border-b-2 border-spacing-2 px-4" key={blog.id}>
            <h4 className="font-medium mb-2" >{blog.title}</h4>
            <Link href="/" className=" hover:text-orange-500 pb-2 text-base inline-flex py-1 items-center">Read More<FaArrowRight className="mt-1 ml-2"/></Link>
            </div>))
        }
      </div>
    </div>
    {/* popular blog */}
    <div className="">
      <h3 className=" text-xl font-semibold px-4 mt-20">Popular Blog</h3>
      <div className="">
        {
          popularBlogs.slice(6,10).map((blog)=>(
            <div className=" my-5 border-b-2 border-spacing-2 px-4" key={blog.id}>
            <h4 className="font-medium mb-2" >{blog.title}</h4>
            <Link href="/" className=" hover:text-orange-500 pb-2 text-base inline-flex py-1 items-center">Read More<FaArrowRight className="mt-1 ml-2"/></Link>
            </div>))
        }
      </div>
    </div>
    </div>
    
  );
};

export default SideBar;
