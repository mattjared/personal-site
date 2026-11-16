import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-10">
      <Link href="/">
        <h1 className="text-2x font-extrabold mb-2 tracking-tighter">[MATT JARED]</h1>
      </Link>
      <p className="text-sm">building, selling and working on websites and agents in Austin, Texas, USA!</p>
    </header>
  );
}
