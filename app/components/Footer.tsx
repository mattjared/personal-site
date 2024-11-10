export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 text-center text-slate-500 text-sm container mx-auto px-4 font-serif">
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-80 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}