export async function getProduct(product: string) {
  const res = await fetch(product, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
