"use client";

import { type dataProducts } from "@/type/dataProducts";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ products }: { products: dataProducts }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.data.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/detail/${product.id}`}>
                <Image
                  alt={product.title}
                  src={product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </Link>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    $ {product.price}
                  </p>
                </div>
                <Link
                  href={`/product/${product.id}`}
                  className="bg-black px-[1vw] py-[.5vw] rounded-md text-white"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
