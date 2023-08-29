import React from "react";
import techshare from "../assets/techshare.png";
import getinspierd from "../assets/getinspierd.png";
import dreamytrips from "../assets/dreamytrips.png";

function Works() {
  return (
    <div name="work" className="w-full p-12 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">
            Check out my work progress in different technologies{" "}
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${dreamytrips})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Dreamy trips Application
              </span>
              <p className="text-center">
                {" "}
                Built with HTML, CSS: Grid Layout & Animations, Bootstrap{" "}
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/sara-likaount/project-d-s-dreamy-trips">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code repository GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${getinspierd})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Get Inspierd Application
              </span>
              <p className="text-center">
                {" "}
                Built with Java script and Web api such as wikipedia api and
                more, deployed to github pages
              </p>
              <div className="pt-8 text-center">
                <a href=" https://sara-likaount.github.io/Get-Inspired/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${techshare})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                TechShare Application
              </span>
              <p className="text-center">
                Built with React,Express and Mongodb, I used Firebase for auth
                and hosting front-end, and railway to host the server
              </p>
              <div className="pt-8 text-center">
                <a href="https://techshare-2bcb6.web.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
