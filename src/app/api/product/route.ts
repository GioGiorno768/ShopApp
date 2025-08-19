import { retrieveData, retrieveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    // const product = data.find((item) => item.id == Number(id));
    const product = await retrieveDataById("products", id);
    if (product) {
      return NextResponse.json({
        status: 200,
        message: "Hello from API route",
        data: product,
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Hello from API route",
      data: "Product not found",
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 404,
    message: "Hello from API route",
    data: products,
  });
}
