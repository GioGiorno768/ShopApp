import ProductItem from "@/components/productItem/ProductItem";
import { getProduct } from "@/services/product";
import { getProductTwo } from "@/services/productTwo";
import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";



export default async function ProductPage() {
  const products = await getProductTwo("http://localhost:3000/api/product");

  console.log(products.data);
  
  return (
    <div className="flex flex-col items-center">
      <ProductItem products={products} />
    </div>
  );
}
