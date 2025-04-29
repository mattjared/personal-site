'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname();
  const navList = [
    {
      "routeName": "Articles",
      "routePath": '/blog' 
    },
    {
      "routeName": "Projects",
      "routePath": '/projects' 
    },
    {
      "routeName": "Contact",
      "routePath": '/contact',
      "isButton": false
    },
  ];
  return (
    <header className="border-b border-gray-200 sticky top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-md font-semibold tracking-tight">Matt Jared</Link>
        <nav className="flex gap-2 ml-auto">
          {navList.map((nav, i) => {
            // const isActive = pathname === nav.routePath || (pathname.startsWith("/blog") && nav.routePath === "/blog");
            return (
              <Link
                key={nav.routeName} 
                className={buttonVariants({ variant: nav.isButton ? "default" : "ghost" })}
                href={nav.routePath}
              >
                {nav.routeName}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
