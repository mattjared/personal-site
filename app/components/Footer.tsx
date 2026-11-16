import { ThemeToggle } from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="p-10 text-sm flex items-center gap-2">
      <ThemeToggle />
      <p>© {new Date().getFullYear()} Matt Jared. All rights reserved.</p>
      <p className="opacity-80 text-sm italic">enthusiasm is a choice</p>  
    </footer>
  )
}