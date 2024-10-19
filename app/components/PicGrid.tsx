import Image from "next/image"

export default function PicGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Image
        alt="Image 1"
            className="rounded-lg shadow-lg"
            height="200"
            src="/images/mug.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Image 2"
            className="rounded-lg shadow-lg"
            height="200"
            src="/images/badge.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Image 3"
            className="rounded-lg shadow-lg"
            height="200"
            src="/images/dexter.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Image 4"
            className="rounded-lg shadow-lg"
            height="200"
            src="/images/bridge.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
      />
    </div>
  )
}