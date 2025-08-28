export default function Footer() {
  return (
    <footer className="pb-6 border-gray-200 text-right text-slate-500 text-sm container mx-auto px-4">
      <hr className="my-4" />
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-80 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}