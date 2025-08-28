import Link from "next/link";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 z-10 bg-white container sticky">
      <div className="mx-auto py-4 flex justify-start items-center border-b-2 border-blue-100">
        <Link href="/" className="text-md font-semibold tracking-tight">Matt Jared</Link>
      </div>
    </header>
  )
}
