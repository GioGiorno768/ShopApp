"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-[80vw] h-screen flex flex-col justify-center items-center">
      <p className="font-montserrat font-semibold text-[2vw]">Something went wrong</p>
      <div className="font-poppins font-medium">{error.message}</div>
      <button className="my-[1vw] px-[1vw] py-[.8vw] bg-blue-600 cursor-pointer text-white rounded-[.5vw]" onClick={() => reset()}>Try again</button>
    </div>
  );
}
