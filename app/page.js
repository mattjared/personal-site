import { site } from "../siteData";
import GithubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div key="1">
      <div className="mt-12 md:flex md:items-center md:justify-between">
        <div className="max-w-xxl">
          <h1 className="text-5xl font-bold leading-tight mb-2">{site.about.title}</h1>
          <h2 className="text-xl font-semibold leading-tighter">{site.about.heading}</h2>
          <p className="mt-5 text-gray-600">{site.about.bio}</p>
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
    </div>
      <div className="mb-8 prose">
        <blockquote className="pl-8 ml-0 my-11 w-full border-l-4 border-current">
          <p className="text-xl mb-4 font-semibold">
            What if you stopped trying to think your way through it
            and started to act your way through it?
          </p>
          <p className="opacity-60 text-sm">- James Clear</p>
        </blockquote> 
      </div>
    </>
  )
}