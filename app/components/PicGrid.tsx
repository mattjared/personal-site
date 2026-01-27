import Image from "next/image"

const images = [
  {
    src: "/images/mug.jpeg",
    alt: "Mug Image",
  },
  {
    src: "/images/badge.jpg",
    alt: "Badge Image",
  },
  {
    src: "/images/dexter.jpeg",
    alt: "Dexter Image",
  },
  {
    src: "/images/bridge.jpeg",
    alt: "Bridge Image",
  },
  {
    src: "/images/bike.jpg",
    alt: "Bike Image",
  },
  {
    src: "/images/chi.jpg",
    alt: "Chicago Image",
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
          className="rounded-lg shadow-lg border-2 border-gray-300 hover:scale-105 transition-all duration-300"
          height={200}
          width={200}
          src={image.src}
          style={{
            aspectRatio: '1',
            objectFit: 'cover',
            transform: `rotate(${tilts[index % tilts.length]}deg)`,
          }}
        />
      ))}
    </div>
  );
}