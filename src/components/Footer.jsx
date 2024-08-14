import React from "react";

const Footer = () => {
  return (
    <div className="self-center mt-3 mb-10 -translate-y-4">
      <div className="relative group after:content-[' '] after:absolute after:w-[1px] after:h-[18px] after:bg-[#444] after:left-1/2 after:top-[65px] ">
        <button className="bg-blue-800 bg-gradient-to-r font-extrabold from-[#0000ffc4] to-[#ff0000] rounded-2xl px-4 py-1.5 relative group-hover:scale-110  ease-in-out duration-100 group  ">
          My Projects
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          className="w-6 h-auto left-1/2 absolute -translate-x-1/2 top-[36px] group-hover:top-[40px]  ease-in-out duration-100 rotate-90 "
        >
          <path
            fill="currentColor"
            d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
            data-name="Right"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
