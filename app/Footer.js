export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-60 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}