import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    product: "product 1",
    price: 100000,
  },
  {
    id: 2,
    product: "product 2",
    price: 200000,
  },
  {
    id: 3,
    product: "product 3",
    price: 300000,
  },
];

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Hello from API route",
    data,
  });
}
