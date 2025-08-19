import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({
      revalidate: false,
      status: 401,
      massage: "Unauthorized",
    });
  }

  if (!tag) {
    return NextResponse.json({
      revalidate: false,
      status: 400,
      massage: "Tag is required",
    });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, status: 200 });
}
