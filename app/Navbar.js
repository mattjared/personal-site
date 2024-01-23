import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
        <Avatar>
          <AvatarImage alt="Profile picture" src="/placeholder.svg?height=40&width=40" />
        </Avatar>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Articles
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Speaking
            </Link>
          </li>
          <li />
        </ul>
      </nav>
  )
}