import React from "react";

const Model = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-10 w-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 mt-5 uppercase">
            please log in here!
          </h2>
          <form className="">
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6
              text-base font-medium text-[#687280] outline-none focus:border-blue-500 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6
              text-base font-medium text-[#687280] outline-none focus:bg-[#6a64f1]   focus:shadow-md"
              />
            </div>
            <button className=" hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none">Log in</button>
          </form>
          {/* Model close button */}
          <button onClick={onClose}
          className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-8">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Model;
