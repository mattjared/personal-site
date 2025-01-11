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

export default function PicGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-1">
      {images.map((image, index) => {
        // Generate a random tilt angle between -5 and 5 degrees
        const randomTilt = Math.random() * 10 - 5;
        return (
          <Image
            key={index}
            alt={image.alt}
            className="rounded-lg shadow-lg border-2 border-gray-300 hover:scale-105 transition-all duration-300"
            height="200"
            src={image.src}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
              transform: `rotate(${randomTilt}deg)`, // Apply random tilt
              transition: "transform 0.3s ease-in-out",
            }}
            width="200"
          />
        );
      })}
    </div>
  );
}