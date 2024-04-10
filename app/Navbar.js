import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <Avatar>
        <AvatarImage src="https://github.com/mattjared.png" />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      
      <ul className="flex space-x-4">
        <li>
          <Link className="text-gray-600 hover:text-gray-900" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-900" href="/contact">
            Contact
          </Link>
        </li>
        <li />
      </ul>
    </nav>
  )
}

