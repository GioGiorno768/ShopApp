"use client";

import Image from "next/image";
import Brand1 from "../Svg/Brand1";
import Brand2 from "../Svg/Brand2";
import Brand3 from "../Svg/Brand3";

export default function Hero() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Build Better Products
          </h1>
          <p className="mt-3 text-lg text-gray-800">
            Introducing a new way for your brand to reach the creative
            community.
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-2.5 sm:py-3 px-4 block w-full min-w-80 border-gray-200 rounded-md sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter work email"
              />
            </div>
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Request demo
            </a>
          </div>

          {/* Brands */}
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium text-gray-800 uppercase">
              Trusted by:
            </span>

            <div className="mt-4 flex gap-x-8">
              <Brand1 />
              <Brand2 />
              <Brand3 />
              
            </div>
          </div>
          {/* End Brands */}
        </div>
        {/* End Col */}

        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Hero Image"
            width={900}
            height={700}
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
