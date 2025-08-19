"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
  const [isRevalidate, setIsRevalidate] = useState(false);
  // const { data: session, status }: { data: any; status: string } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "loading") return; // tunggu session siap

  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //     return;
  //   }

  //   if (status === "authenticated" && session?.user.role !== "admin") {
  //     router.push("/");
  //   }
  // }, [router, session?.user.role, status]);
  const revalidate = async () => {
    const res = await fetch(
      "/api/revalidate?tag=products&secret=wongirengjembuten635",
      {
        method: "POST",
      }
    );

    if (res.ok) {
      setIsRevalidate(true);
    } else {
      setIsRevalidate(false);
    }
  };

  return (
    <div className="w-full h-[25vw] border border-black flex flex-col justify-center items-center">
      <h1>{isRevalidate ? "Revalidated" : "Not revalidated"}</h1>
      <button
        className="bg-slate-500 text-white p-3 rounded-md "
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
