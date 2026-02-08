import { useRef, useState, type MouseEvent } from "react";
import { sponsors } from "../api/sponsors";

export default function SponsorTicker() {
  const loopSponsors = [...sponsors, ...sponsors];

  const containerRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrolllLeft, setScrollLeft] = useState(0);

  const onMouseDown = (event: MouseEvent) => {
    if (!containerRef.current) return;
    setIsDown(true);
    containerRef.current.classList.add("pause-animation");
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
    containerRef.current?.classList.remove("pause-animation");
  };

  const onMouseUp = () => {
    setIsDown(false);
    containerRef.current?.classList.remove("pause-animation");
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    event.preventDefault();

    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrolllLeft - walk;
  };

  return (
    <div className="mx-4 overflow-hidden">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-6 animate-ticker whitespace-nowrap"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {loopSponsors.map((sponsor, index) => (
            <div key={index} className="rounded px-4 py-2 text-sm">
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
