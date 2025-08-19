import Image from "next/image";
import { card } from "../Data";

export default function News() {
  const cards = card;
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Read our latest news
          </h2>
          <p className="mt-1 text-gray-600">
            We`&apos;`ve helped some great companies brand, design and get to
            market.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {/* Card */}
          {cards.map((item) => (
            <a
              key={item.id}
              className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  className="w-full h-56 object-cover rounded-t-xl"
                  src={item.image}
                  alt="Blog Image"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="mt-2 text-xs uppercase text-gray-600">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                  {item.description}
                </h3>
              </div>
            </a>
          ))}
          {/* End Card */}
        </div>
        {/* End Grid */}

        {/* Card */}
        <div className="text-center">
          <div className="inline-block bg-white border border-gray-200 shadow-2xs rounded-full">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <p className="text-gray-600">Want to read more?</p>
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                href="#"
              >
                Go here
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Card Blog */}
    </>
  );
}
