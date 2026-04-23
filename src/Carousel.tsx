import { useState } from "react";

type Props = {
  images?: string[]; // optional, since you default it
};

export default function Carousel({ images = [] }: Props) {
  const [index, setIndex] = useState<number>(0);

  const prev = () => {
    setIndex((i: number) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i: number) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full mb-16">

      {/* SLIDER */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {images.map((img: string, i: number) => (
            <div key={i} className="min-w-full">
              <img
                src={img}
                className="w-full h-[420px] object-contain bg-gray-50 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow hover:bg-white"
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-2 rounded-full shadow hover:bg-white"
      >
        →
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_: string, i: number) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-black w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}