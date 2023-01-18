import Link from 'next/link';

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  // const opacities = ['bg-altBlue/100', 'bg-altBlue/90', 'bg-altBlue/80', 'bg-altBlue/70', 'bg-altBlue/60', 'bg-altBlue/50', 'bg-altBlue/40', 'bg-altBlue/30', 'bg-altBlue/20', 'bg-altBlue/10', 'bg-altBlue/5', 'bg-altBlue/2']
  let items = [];
  const opacities2 = ['100', '90', '80', '70', '60', '50', '40', '30', '20', '10', '5', '2'];
  opacities2.forEach((el) => { 
    items.push(`bg-altBlue/${el}`)
  })
  return (
    <div className="py-32 px-8 max-w-4xl min-h-screen transition-all m-auto">
    <h1 className="m-0 text-jumbo font-extrabold">
      <Link href='/' className="">
        Matt Jared
      </Link>
    </h1>
    <div className="flex items-stretch gap-1 mb-9 h-[32px]">
      {/* {opacities.map((el, i) => {
        return (<div className={`${el} grow h-full`} key={i}></div>)
      })} */}
      {items.map((el, i) => {
        return (<div className={`${el} grow h-full`} key={i}></div>)
      })}
    </div>
    { children }
    <footer className="shadow p-6">
      <p className="opacity-60 text-sm">Site made with code. All rights reserved {currentYear}. Hosted on Vercel, code available on <Link target="_blank" href="https://github.com/mattjared/mattjared.github.io">Github</Link></p>
    </footer>
  </div>
  );
}