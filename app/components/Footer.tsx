export default function Footer() {
  return (
    <footer className="py-6 text-right text-slate-500 text-sm  mx-auto px-4 border-t-2 border-blue-100">
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-80 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}