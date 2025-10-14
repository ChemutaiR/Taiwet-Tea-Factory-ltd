"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type FeaturedCarouselProps = {
  intervalMs?: number;
};

type FeaturedItem = {
  src: string;
  name: string;
  gradeCode: "P1" | "P2";
  gradeName: "Primary Grade" | "Secondary Grade";
  description: string;
  tag: "Retail" | "Bulk";
};

export default function FeaturedCarousel({ intervalMs = 3500 }: FeaturedCarouselProps) {
  const items: FeaturedItem[] = useMemo(
    () => [
      {
        src: "/product.jpg",
        name: "Assam Reserve",
        gradeCode: "P1",
        gradeName: "Primary Grade",
        description:
          "Whole-leaf selection with consistent size and aroma for a refined cup.",
        tag: "Retail",
      },
      {
        src: "/product.jpg",
        name: "Darjeeling First Flush",
        gradeCode: "P2",
        gradeName: "Secondary Grade",
        description:
          "Broken-leaf profile that brews quicker with a brighter, robust character.",
        tag: "Bulk",
      },
      {
        src: "/product.jpg",
        name: "Ceylon Estate",
        gradeCode: "P1",
        gradeName: "Primary Grade",
        description:
          "Carefully sorted whole leaves highlighting clarity, aroma and finish.",
        tag: "Retail",
      },
      {
        src: "/product.jpg",
        name: "Kenyan Breakfast",
        gradeCode: "P2",
        gradeName: "Secondary Grade",
        description:
          "Even broken grade ideal for bold breakfast blends and milk tea.",
        tag: "Bulk",
      },
      {
        src: "/product.jpg",
        name: "Earl Grey Premium",
        gradeCode: "P1",
        gradeName: "Primary Grade",
        description:
          "Classic bergamot-scented blend with whole leaf base for aromatic depth.",
        tag: "Retail",
      },
      {
        src: "/product.jpg",
        name: "English Breakfast",
        gradeCode: "P2",
        gradeName: "Secondary Grade",
        description:
          "Robust morning blend perfect for milk and sugar, ideal for bulk orders.",
        tag: "Bulk",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, items.length - itemsPerView);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + itemsPerView) % (maxIndex + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [maxIndex, intervalMs, itemsPerView]);

  const showPrev = () => setIndex((prev) => Math.max(0, prev - itemsPerView));
  const showNext = () => setIndex((prev) => (prev + itemsPerView) % (maxIndex + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-black/10 shadow-sm">
      <div className="relative h-96 w-full sm:h-[28rem]">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
        >
          {items.map((item, i) => (
            <div key={`${item.src}-${i}`} className="w-full flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
              <div className="flex h-full flex-col gap-2 p-2">
                {/* Image section */}
                <div className="relative h-60 w-full flex-shrink-0 sm:h-72">
                  <Image
                    src={item.src}
                    alt="Featured product"
                    fill
                    sizes="33vw"
                    priority={i >= index && i < index + itemsPerView}
                    className="rounded object-cover"
                  />
                </div>
                {/* Card content */}
                <div className="flex-1 rounded border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-700">
                        <span className="font-semibold">{item.gradeCode}</span> · {item.gradeName}
                      </p>
                      <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium flex-shrink-0 ${item.tag === "Retail" ? "bg-blue-100 text-blue-800" : "bg-orange-100 text-orange-800"}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={showPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded bg-[#2e7d32]/80 px-3 py-2 text-white hover:bg-[#2e7d32] transition-colors"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={showNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-[#2e7d32]/80 px-3 py-2 text-white hover:bg-[#2e7d32] transition-colors"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-2">
        {Array.from({ length: Math.ceil(items.length / itemsPerView) }).map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full transition-colors ${Math.floor(index / itemsPerView) === i ? "bg-[#2e7d32]" : "bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}


