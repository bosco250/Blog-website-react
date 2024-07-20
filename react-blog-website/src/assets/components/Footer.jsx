import React from "react";
import { FaFacebook, FaInstagram, FaTwitter }from 'react-icons/fa6'
function Footer() {
  return (
    <div className="bg-gray-900 ">
      <div className="px-4 lg:flex  pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20">
        <div className=" flex-1">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            
            <div>
              <p className=" font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Refarences
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className=" font-medium tracking-wide text-gray-300">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    PortFolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className=" font-medium tracking-wide text-gray-300">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Bronchure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className=" font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                  Projects
                  </a>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
        <div className="md:py-0 py-5">
              <p className=" font-medium tracking-wide text-gray-300">Subscribe for updates</p>
              <form action="" className="mt-4 flex flex-col md:flex-row">
                <input type="email" name="email" id="email" className=" flex-grow itemce w-full h-12  
                px-4 mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm aspect-auto md:mr-2 md:mb-0
              focus:border-purple-400 focus:outline-none rounded" />
              <button type="submit" className="inline-flex items-center justify-center h-12 px-6
                font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border mt-4 md:mt-auto h-1/2 ">Subscribe</button>
              </form>
              <p className=" mt-4 text-sm text-gray-500 max-w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos saepe voluptatem repudiandae enim iusto earum nihil! Quis sed sapiente officia facere sunt tenetur sequi minus veniam perferendis, quaerat quisquam!
              </p>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-5 pb-10 border-t border-x-gray-800 sm:flex-row px-5 lg:px-40 mt-3">
        <p className=" text-gray-500">&copy; Copyright {(new Date().getFullYear())} | All right reserved</p>
        <div className="  flex items-center mt-4 space-x-4 sm:mt-0
        ">
          <a href="" className=" text-gray-500 transition-all duration-300 hover:text-orange-500">
            <FaInstagram className=" h-6 w-6"/> </a>
            <a href="" className=" text-gray-500 transition-all duration-300 hover:text-orange-500">
            <FaTwitter className=" h-6 w-6"/> </a>
            <a href="" className=" text-gray-500 transition-all duration-300 hover:text-orange-500">
            <FaFacebook className=" h-6 w-6"/> </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
