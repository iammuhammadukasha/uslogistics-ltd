"use client";

import Image from "next/image";

const WHO_WE_ARE_IMAGE = "/who-we-are.jpg";

export default function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Very light gradient background - no grey */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-50/70 via-white to-sky-50/60"
        aria-hidden
      />
      {/* Subtle decorative blobs */}
      <div
        className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-10 right-1/4 h-64 w-96 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left: who-we-are image (first card) - from your public folder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] lg:aspect-auto lg:min-h-[380px] lg:flex-1">
            <Image
              src={WHO_WE_ARE_IMAGE}
              alt="Who we are - industrial facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={false}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const next = e.currentTarget.nextElementSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            {/* Placeholder if image missing */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-sky-100/80"
              style={{ display: "none" }}
            />
          </div>

          {/* Right: text card - overlaps the image */}
          <div className="relative z-10 -mt-6 rounded-3xl bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:p-10 lg:-ml-24 lg:mt-0 lg:max-w-md lg:flex-shrink-0">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              About US
            </p>
            <h2
              className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Who We Are
            </h2>
            <p
              className="mt-6 text-base leading-relaxed text-gray-600"
              style={{ fontFamily: "'Coco Gothic', sans-serif" }}
            >
              We represent trusted global ethanol manufacturers in regional and
              international markets. We represent trusted global ethanol
              manufacturers in regional and international markets. We represent
              trusted global ethanol manufacturers in regional and international
              markets.
            </p>
            <a
              href="#companies"
              className="mt-8 inline-block rounded-xl bg-gray-800 px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-gray-700"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
