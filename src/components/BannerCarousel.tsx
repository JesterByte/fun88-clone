import { useEffect, useState } from "react";
import { desktopBanners, mobileBanners } from "../api/banners";

const AUTO_SLIDE_MS = 3000;

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const banners = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            className="w-full h-48 sm:h-96 lg:h-80 flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
