"use client";

import Image from "next/image";

export default function GetInTouchSection() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[520px_1fr] lg:gap-16 lg:items-center">
          {/* Left: image with rounded corners - 520px width */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[2rem] mx-auto lg:mx-0 lg:max-w-[520px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <Image
              src="/contact-image.png"
              alt="Get in touch"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 280px, 520px"
            />
          </div>

          {/* Right: contact form */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Get in Touch With Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We&apos;re always ready to discuss partnerships, product details, or
              bulk ethanol orders. Send us a message and our team will reach out
              shortly.
            </p>

            <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700">NAME</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border-0 bg-gray-800 px-4 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700">EMAIL</span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-2xl border-0 bg-gray-800 px-4 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">SUBJECT</span>
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-2xl border-0 bg-gray-800 px-4 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-700">
                  MESSAGE/INQUIRY
                </span>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="rounded-2xl border-0 bg-gray-800 px-4 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-full max-w-[200px] rounded-2xl bg-gray-800 px-6 py-3.5 font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:w-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
