import Image from "next/image"

const images = [
  {
    src: "/images/mug.jpeg",
    alt: "Mug Image",
    width: 640,
    height: 640,
  },
  {
    src: "/images/badge.jpg",
    alt: "Badge Image",
    width: 300,
    height: 300,
  },
  {
    src: "/images/dexter.jpeg",
    alt: "Dexter Image",
    width: 640,
    height: 640,
  },
  {
    src: "/images/bridge.jpeg",
    alt: "Bridge Image",
    width: 640,
    height: 640,
  },
  {
    src: "/images/bike.jpg",
    alt: "Bike Image",
    width: 640,
    height: 640,
  },
  {
    src: "/images/chi.jpg",
    alt: "Chicago Image",
    width: 1080,
    height: 1080,
  },
]

// Deterministic tilts to avoid hydration mismatch
const tilts = [-3, 2, -4, 3, -2, 4];

export default function PicGrid() {
  return (
    <div className="my-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
      {images.map((image, index) => (
        <Image
          key={index}
          alt={image.alt}
          className="rounded-lg shadow-lg border-2 border-gray-300 hover:scale-105 transition-all duration-300 aspect-square object-cover"
          width={image.width}
          height={image.height}
          src={image.src}
          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 33vw"
          quality={75}
          style={{
            transform: `rotate(${tilts[index % tilts.length]}deg)`,
          }}
        />
      ))}
    </div>
  )
}
