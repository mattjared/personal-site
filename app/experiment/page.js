
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div key="1" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
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
      <div className="mt-12 md:flex md:items-center md:justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">Hey! I'm Matt Jared</h1>
          <p className="mt-5 text-gray-600">
            I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
            Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
          <div className="flex space-x-3 mt-6">
            <GithubIcon className="text-gray-600 hover:text-gray-900" />
            <LinkedinIcon className="text-gray-600 hover:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <img
          alt="Image 1"
          className="rounded-lg shadow-lg"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <img
          alt="Image 2"
          className="rounded-lg shadow-lg"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <img
          alt="Image 3"
          className="rounded-lg shadow-lg"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <img
          alt="Image 4"
          className="rounded-lg shadow-lg"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">Blog Title 1</h3>
            <p className="text-gray-600">
              This is a summary of the blog post. It gives a brief overview of the content.
            </p>
            <Link className="text-blue-600 hover:text-blue-800 mt-4 inline-block" href="#">
              Read More
            </Link>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">Blog Title 2</h3>
            <p className="text-gray-600">
              This is a summary of the blog post. It gives a brief overview of the content.
            </p>
            <Link className="text-blue-600 hover:text-blue-800 mt-4 inline-block" href="#">
              Read More
            </Link>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">Blog Title 3</h3>
            <p className="text-gray-600">
              This is a summary of the blog post. It gives a brief overview of the content.
            </p>
            <Link className="text-blue-600 hover:text-blue-800 mt-4 inline-block" href="#">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <footer className="mt-12 py-6 border-t border-gray-200 text-center text-gray-400 text-sm">
        <p>© 2024 Spencer. All rights reserved.</p>
      </footer>
    </div>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
