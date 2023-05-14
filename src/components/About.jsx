import React from 'react'

 function About() {
  return (
    <div
      name="about"
      id="about"
      className="w-full p-8 bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 p-12">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Sara Likaount, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in MERN stack development principles and
                practices. In addition to my love to coding, I am also a
                a travel lover, enjoing spending time in nature, or in a plane. always  with a good book .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
 export default About