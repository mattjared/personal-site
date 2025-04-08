import PicGrid from "./PicGrid";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 text-right text-slate-500 text-sm container mx-auto px-4">
      <PicGrid />
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-80 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}