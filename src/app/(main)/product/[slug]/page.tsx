import { getProduct } from "@/services/product";
import { getProductTwo } from "@/services/productTwo";

export default async function productDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = await getProductTwo(
    `http://localhost:3000/api/product/?id=${slug}`
  );
  console.log(product);

  return (
    <div className="pt-24 w-[80vw] px-[2vw]">
      <div className="group w-full flex gap-[2vw] ">
        <img
          // alt={product.imageAlt}
          src={product.data.image}
          className="aspect-square w-96 rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
        <div>
          <h3 className="mt-4 text-sm text-gray-700 font-semibold font-sans text-[2vw]">
            {product.data.title}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            $ {product.data.price}
          </p>
          <p className="mt-1 text-md font-medium text-gray-900">
            {product.data.description}
          </p>
          <div className="py-[1vw]">
            Category: 
            <span> {product.data.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
