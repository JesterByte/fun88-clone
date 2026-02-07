import { useEffect, useState } from "react";
import { banners } from "../api/banner";

const AUTO_SLIDE_MS = 3000;

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SLIDE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg mx-4">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.image}
            alt="Casino Banner"
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
