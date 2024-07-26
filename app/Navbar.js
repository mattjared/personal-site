'use client'

import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    }
  ];
  return (
    <div className="flex justify-between items-center py-6">
      <Link href="/">
        <Avatar>
          <AvatarImage src="/images/profilepic.png" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
      </Link>
      <ul className="flex gap-4">
          {navList.map((nav, i) => {
            const isActive = function() {
              let navClassName; 
              if ((pathname.startsWith("/blog") && nav.routePath === "/blog") || pathname === nav.routePath) {
                navClassName = "text-orange-400"
              } else {
                navClassName = "text-blue-400"
              }
              {/* if () {
                console.log("hey this is a blog");
              } */}
              return navClassName
            }
            return (
                <li key={`${i}-list`} className="space-x-4">
                  <Link href={nav.routePath} className={isActive()}>{nav.routeName}</Link>
                </li>
            )
          })}
      </ul>
    </div>
  )
}

