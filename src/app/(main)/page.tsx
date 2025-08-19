"use client";
import Hero from "@/components/hero/Hero";
import Overview from "@/components/overview/Overview";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="pt-24">
        <Hero />
        <Overview />
      </div>
    ); // atau skeleton biar ga blank
  return (
    <div className="pt-24">
      <Hero />
      <Overview />
    </div>
  );
}
