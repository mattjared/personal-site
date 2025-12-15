import Link from "next/link";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 z-10 bg-white dark:bg-slate-950 sticky">
      <div className="mx-auto p-4 flex justify-between items-center border-b-2 border-blue-100 dark:border-slate-800">
        <Link href="/" className="text-xl font-semibold tracking-tight font-headline">Matt Jared</Link>
      </div>
    </header>
  )
}
