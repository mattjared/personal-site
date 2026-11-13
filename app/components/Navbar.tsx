'use client'; 

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    // Sync with current scroll position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 
  return (
    <header className={`fixed transition-all duration-300 bg-white dark:bg-slate-950 left-0 right-0 z-10 shadow-lg border-b-2 border-blue-100 dark:border-slate-800 ${isSticky ? 'bg-blue-200 top-0  invisible opacity-0' : 'opacity-100 visible'}`}>
      <div className="mx-auto p-4 flex justify-between items-center border-b-2 border-blue-100 dark:border-slate-800">
        <Link href="/" className="text-xl font-semibold tracking-tight">Matt Jared</Link>
      </div>
    </header>
  );
}
