import { site } from "../siteData";
import GithubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";
import Image from "next/image";
import BlogGrid from "./BlogGrid";
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
            <Link href="https://github.com/mattjared">
              <GithubIcon className="text-gray-600 hover:text-gray-900" />
            </Link>
            <Link href="https://linkedin.com/in/mattjared9">
              <LinkedinIcon className="text-gray-600 hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Image
          alt="Image 1"
          className="rounded-lg shadow-lg"
          height="200"
          src="/images/mug.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <Image
          alt="Image 2"
          className="rounded-lg shadow-lg"
          height="200"
          src="/images/badge.jpg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <Image
          alt="Image 3"
          className="rounded-lg shadow-lg"
          height="200"
          src="/images/dexter.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <Image
          alt="Image 4"
          className="rounded-lg shadow-lg"
          height="200"
          src="/images/bridge.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Latest Blogs</h2>
        <BlogGrid isHome />
      </section>
    </div> 
    </>
  )
}