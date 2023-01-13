import Link from 'next/link';

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  let items = [];
  const opacities = ['100', '90', '80', '70', '60', '50', '40', '30', '20', '10', '5', '2'];
  opacities.forEach((el) => { 
    items.push(`bg-altBlue/${el}`)
  })
  return (
    <div className="wrapper">
    <h1 className="m-0 text-jumbo font-extrabold">
      <Link href='/' className="">
        Matt Jared
      </Link>
    </h1>
    <div className="flex items-stretch gap-1 mb-3 h-[32px]">
      {items.map((el, i) => {
        return (<div className={`${el} grow h-full`} key={i}></div>)
      })}
    </div>
    <div className='mb-6'>
      { children }
    </div>
    <footer className="shadow p-6">
      <p>Site made with code. All rights reserved {currentYear}. Hosted on Vercel, code available on <Link target="_blank" href="https://github.com/mattjared/personal-site ">Github</Link></p>
    </footer>
  </div>
  );
}