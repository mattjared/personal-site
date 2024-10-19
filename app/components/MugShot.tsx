import Image from "next/image"

export default function MugShot({ heading, subheading }: { heading: string, subheading: string }) {
  return (
    <div>
      <Image
        src="/images/profilepic.png"
        alt="Profile picture"
        width={300}
        height={300}
        className="rounded-3xl"
      />
      <h2 className="text-5xl font-serif mt-8 mb-2">{heading}</h2>
      <p className="text-xl mb-4">{subheading}</p>
    </div>
  )
}