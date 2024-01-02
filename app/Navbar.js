import Link from "next/link";

export default function Navbar() {
  // const opacities = ['bg-altBlue/100', 'bg-altBlue/90', 'bg-altBlue/80', 'bg-altBlue/70', 'bg-altBlue/60', 'bg-altBlue/50', 'bg-altBlue/40', 'bg-altBlue/30', 'bg-altBlue/20', 'bg-altBlue/10', 'bg-altBlue/5', 'bg-altBlue/2'];
  return (
    <div className="mx-auto w-full max-w-3xl lg:px-8 lg:mb-8">
      <h1 className="m-0 font-extrabold text-[4vw] uppercase text-center text-slate-700">
        <Link href='/' className="">
          Matt Jared
        </Link>
      </h1>
      <ul className="grid grid-cols-4 class shadow bg-white p-2 rounded-xl text-center text-sm font-medium max-w-md w-full mx-auto text-slate-700">
        <li><Link className="p-2 w-100 shadow-sm" href="/">About</Link></li>
        <li><Link className="p-2 w-100" href="/projects">Projects</Link></li>
        <li><Link className="p-2 w-100 shadow-sm" href="/blog">Blog</Link></li>
        <li><Link className="p-2 w-100 shadow-sm" href="/contact">Contact</Link></li>
      </ul> 
    </div>
  )
}