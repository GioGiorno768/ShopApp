"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Profile</h1>
      <h2 className="text-2xl font-bold mb-4 text-center text-[#DC2285] ">
        hello {session?.user?.username}
      </h2>
    </div>
  );
}
