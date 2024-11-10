'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname();
  const navList = [
    {
      "routeName": "Home",
      "routePath": '/' 
    },
    {
      "routeName": "Blog",
      "routePath": '/blog' 
    },
    {
      "routeName": "Projects",
      "routePath": '/projects' 
    },
    {
      "routeName": "Contact",
      "routePath": '/contact' 
    },
  ];
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <nav className="flex gap-4 ml-auto mr-5">
        {navList.map((nav, i) => {
          const isActive = pathname === nav.routePath || (pathname.startsWith("/blog") && nav.routePath === "/blog");
          return (
            <Link 
              key={nav.routeName} 
              href={nav.routePath} 
              className={`space-x-4 ${isActive ? "text-teal-400 font-semibold" : "text-slate-700"}`}
            >
              {nav.routeName}
            </Link>
          )
        })}
      </nav>
      <Button variant="outline" className="text-sm" asChild><Link href="/deploy">Deploy this site</Link></Button>
    </header>
  )
}
