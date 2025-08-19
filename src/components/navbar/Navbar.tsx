"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const route = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();
  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/product", label: "Product" },
    { href: "/profile", label: "Profile" },
  ];

  const [mounted, setMounted] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Kalau scroll lebih dari 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // atau skeleton biar ga blank

  console.log(session);

  return (
    <nav
      className={` z-50 ${
        isScrolled ? "bg-white/30 backdrop-blur-md" : ""
      } transition-all duration-200 p-4 px-[2vw] fixed top-0 left-0 right-0 flex justify-between`}
    >
      {status === "authenticated" ? (
        <h1>Hello... {session?.user?.username}</h1>
      ) : (
        <h1>Youshop</h1>
      )}
      <ul className="flex gap-4">
        {nav.map((item) => (
          <li
            key={item.href}
            className="flex flex-col gap-[.2vw] items-center font-semibold"
          >
            <Link href={item.href}>{item.label}</Link>
            <span
              className={`h-[.2vw] w-full ${
                path === item.href ? "w-full bg-blue-600" : ""
              }  rounded-full transition-all duration-150`}
            ></span>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button
          className="cursor-pointer"
          onClick={() => (status === "authenticated" ? signOut() : signIn())}
        >
          {status === "authenticated" ? "Logout" : "Login"}
        </button>
        {status === "unauthenticated" && (
          <button
            className="bg-blue-600 cursor-pointer text-white px-[1vw] rounded-[.4vw]"
            onClick={() => route.push("/register")}
          >
            Sign Up
          </button>
        )}
      </div>
    </nav>
  );
}
