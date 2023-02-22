import Link from "next/link";

export default function Navbar() {
  const opacities = ['bg-altBlue/100', 'bg-altBlue/90', 'bg-altBlue/80', 'bg-altBlue/70', 'bg-altBlue/60', 'bg-altBlue/50', 'bg-altBlue/40', 'bg-altBlue/30', 'bg-altBlue/20', 'bg-altBlue/10', 'bg-altBlue/5', 'bg-altBlue/2'];
  return (
    <>
      <h1 className="m-0 text-jumbo font-extrabold">
        <Link href='/' className="">
          Matt Jared
        </Link>
      </h1>      
      <div className="flex items-stretch gap-1 mb-9 h-[32px]">
        {opacities.map((el, i) => {
          return (<div className={`${el} grow h-full`} key={i}></div>)
        })}
      </div>
    </>
  )
}