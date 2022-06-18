import React from "react";
import { ChatIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { CodeIcon, DatabaseIcon } from "@heroicons/react/solid";
import SupportImg from "../assets/support.jpg";

export const Support = () => {
  return (
    <div className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={SupportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-6 text-2xl text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-center text-5xl font-bold py-6">
            Find your support
          </h3>
          <p className="text-3xl text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            animi dicta deleniti id neque ab mollitia voluptatem quas itaque
            magni consequatur, voluptatibus ad ipsum aut enim voluptate hic
            maxime libero?
          </p>
        </div>
        <div className="grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-lg ">
            <div className="p-8">
              <ChatIcon className="w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Chat</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti numquam accusamus nisi dolorem, e.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg ">
            <div className="p-8">
              <CodeIcon className="w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Code Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti numquam accusamus nisi dolorem, e.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg ">
            <div className="p-8">
              <DatabaseIcon className="w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]" />
              <h3 className="my-4 font-bold text-2xl">Backend Enquiry</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti numquam accusamus nisi dolorem, e.
              </p>
            </div>
            <div className="bg-slate-100 py-4 pl-8">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
