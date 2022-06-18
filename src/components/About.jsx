import React from "react";

export const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-2xl text-gray-500 py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium perspiciatis exercitationem accusantium dicta maiores
            assumenda porro, commodi nesciunt quam illo, aperiam fuga at veniam
            illum voluptate atque aliquam provident odit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl text-indigo-600 font-bold">100%</p>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl text-indigo-600 font-bold">24/7</p>
            <p className="text-gray-400 mt-2">Help for you</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl text-indigo-600 font-bold">100+</p>
            <p className="text-gray-400 mt-2">Developer are connected</p>
          </div>
        </div>
      </div>
    </div>
  );
};
