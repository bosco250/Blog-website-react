import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight} from "react-icons/fa6"

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto text-white">
      <div className=" text-white text-center">
        <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our Blog
        </h1>
        <p className=" text-gray-100 lg:w-3/4 mx-auto mb-5 font-primary">
          Start your blog today and join community of writer and reader who are
          passonate about sharing their stories and ideas. We offer every thing
          you need to get started, from helpful tips and toutorials
        </p>
        <div className="">
          <Link href="/" className=" hover:text-orange-500 font-medium inline-flex py-1 items-center">Learn More<FaArrowRight className="mt-1 ml-2"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
