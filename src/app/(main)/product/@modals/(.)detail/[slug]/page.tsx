import Modal from "@/components/Modal";
import { getProduct } from "@/services/product";
import { getProductTwo } from "@/services/productTwo";

export default async function productDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductTwo(
    `http://localhost:3000/api/product/?id=${slug}`
  );
  console.log(product);

  return (
    <Modal>
      <div className="group bg-white p-3 rounded-md">
        <img
          // alt={product.imageAlt}
          src={product.data.image}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
        <h3 className="mt-4 text-sm text-gray-700">{product.data.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.data.price}
        </p>
      </div>
    </Modal>
  );
}
