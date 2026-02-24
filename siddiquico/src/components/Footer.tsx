"use client";

import Image from "next/image";
import Link from "next/link";

const companies = [
  "Siddiqui & Co",
  "Siddico Asia PTE LTD",
  "Siddiqui Enterprises",
  "Siddiqui & Co LLC USA",
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Main footer - dark with rounded top corners */}
      <div className="relative overflow-hidden rounded-t-2xl bg-[#36393F] px-6 py-16 md:px-10 lg:px-16">
        {/* Optional subtle background overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=30)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#36393F]/95" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl gap-12 text-white sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Logo, description, contact, socials */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Siddiqui & Co"
                width={80}
                height={32}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/95">
              We supply premium-grade ENA 96% & Anhydrous 99.9% ethanol, and
              top-quality rice, delivering excellence and reliability worldwide.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+922134150777"
                className="flex items-center gap-3 text-sm font-medium text-white"
              >
                <PhoneIcon className="h-5 w-5 shrink-0" />
                +92 21 34150777
              </a>
              <a
                href="mailto:info@siddiquico.com"
                className="flex items-center gap-3 text-sm font-medium text-white"
              >
                <EmailIcon className="h-5 w-5 shrink-0" />
                info@siddiquico.com
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/90 hover:text-white" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/90 hover:text-white" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Companies & Quick Links */}
          <div className="flex flex-col gap-10 sm:flex-row lg:col-span-4 lg:gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Our Companies
              </h3>
              <ul className="mt-4 space-y-2">
                {companies.map((name) => (
                  <li key={name}>
                    <span className="text-sm text-white/90">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Spacer (empty on small, or we use col-span) */}

          {/* Column 4: Subscribe */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Subscribe to our mailing list
            </h3>
            <form
              className="mt-4 flex rounded-full overflow-hidden bg-white/15 shadow-inner"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-full items-center justify-center bg-white/20 px-5 py-3.5 text-white transition hover:bg-white/30 focus:outline-none"
                aria-label="Subscribe"
              >
                <CheckIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/20 bg-[#2c2e32] py-5">
        <p className="text-center text-sm text-white/80">
          Copyright 2026 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
