export async function getProductTwo(product: string) {
  const res = await fetch(product, {
    cache: "force-cache",
    next: {
      //  revalidate: 10
      tags: ["products"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
