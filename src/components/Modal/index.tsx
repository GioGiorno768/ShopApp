"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const handleClose: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      className="fixed top-0 left-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto bg-black/50  bg-opacity-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="relative w-full max-w-[30vw] max-h-full">{children}</div>
    </div>
  );
}
