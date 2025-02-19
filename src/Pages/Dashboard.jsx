// import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Header */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center bg-white p-8 shadow-lg rounded-xl">
        {/* Info Section */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-gray-600 text-sm">Fullstack App Developer</h3>
          <h1 className="text-4xl font-bold">
            Hi, I am <span className="text-black">Yoga Alfa Risqi</span>
          </h1>
          <p className="text-gray-600">
            Designing and Developing Scalable, High-Performance Applications Across Frontend & Backend, Bridging Innovation with Seamless User Experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              Download CV
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg font-semibold">
              Hire Me
            </button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-2 mt-4">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg p-2">
            <img
              src="src\assets\Profile.jpg"
              alt="Profile"
              className="rounded-xl w-64"
            />
          </div>
        </div>
      </div>

      {/* Passion Section */}
      <div className="max-w-5xl w-full mt-12">
        <h2 className="text-2xl font-semibold">
          <span className="text-green-500">Passion</span>ate
        </h2>

        {/* Passion Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <img
              src="src\assets\WEB.png"
              alt="Web Development"
              className="w-12"
            />
            <p className="mt-3 text-center">Web Development</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <img
              src="src\assets\Flutter.png"
              alt="Mobile Apps Development"
              className="w-12"
            />
            <p className="mt-3 text-center">Mobile Apps Development</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <img
              src="src\assets\Figma.jpg"
              alt="Artificial Intelligence"
              className="w-12"
            />
            <p className="mt-3 text-center">Artificial Intelligence</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <img
              src="src\assets\Figma.jpg"
              alt="UI/UX Design"
              className="w-12"
            />
            <p className="mt-3 text-center">UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
