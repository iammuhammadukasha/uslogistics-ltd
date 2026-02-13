'use client';

import { motion } from 'framer-motion';
import USATransportHeroBg from './components/USATransportHeroBg';
import { Features } from '@/components/ui/features-3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ClipboardList, FileCheck, DollarSign, ShieldCheck } from 'lucide-react';

const scrollViewport = { once: true, amount: 0.1 };
const scrollTransition = { duration: 0.5, ease: 'easeOut' };

export default function USLogisticsPage() {
  return (
    <>
      {/* US Logistics Ltd. Hero Section */}
      <div className="ut-hero-wrap">
        <div className="ut-topbar">
          <div className="ut-container ut-topbar-inner">
            <span className="ut-topbar-left">We are waiting to assist you.</span>
            <div className="ut-topbar-right">
              <a href="tel:+12816434600" className="ut-topbar-phone" aria-label="Call us">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call us: (281) 643-4600
              </a>
              <span className="ut-topbar-divider" />
              <div className="ut-topbar-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
              </div>
            </div>
          </div>
        </div>

        <nav className="ut-nav" id="content">
          <div className="ut-container ut-nav-inner">
            <a href="#home" className="ut-logo">US Logistics Ltd.</a>
            <div className="ut-nav-center" />
            <a href="#contact" className="ut-nav-cta">Contact us</a>
          </div>
        </nav>

        <header className="ut-hero" id="home">
          <USATransportHeroBg />
          <div className="ut-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="ut-hero-badge">+ Partners in Difficulties +</span>
              <h1 className="ut-hero-title">
                Your All-In-One Dispatching & Haulage Solution
              </h1>
              <p className="ut-hero-desc">
                From Vision to Destination, We Build Reliable Dispatching Solutions That Move You Forward
              </p>
              <a href="#contact" className="ut-hero-cta">Get Started →</a>
            </motion.div>
          </div>
        </header>
      </div>

      {/* Equipment strip */}
      <section className="ut-equip-strip" aria-labelledby="ut-equip-heading">
        <p className="ut-equip-strip-text" id="ut-equip-heading">
          We proudly work with <strong>Box Trucks</strong>, <strong>Flatbeds</strong>, <strong>Hotshots</strong>, <strong>Dry Vans</strong>, <strong>Reefers</strong>, and <strong>Power-Only</strong> — ensuring that no matter your <strong>equipment</strong>, we&apos;ve got the right loads for you.
        </p>
      </section>

      {/* 3rd section: Features (shadcn) */}
      <Features />

      {/* 4th section: Why Choose Us? - purple bg image + full section content */}
      <section className="ut-why-section" id="why-choose-us">
        <div className="ut-why-bg" aria-hidden />
        <div className="ut-why-overlay" aria-hidden />
        <div className="ut-why-inner">
          <span className="ut-why-badge">
            <span className="ut-why-badge-plus" aria-hidden>+</span>
            Our Approach
          </span>
          <h2 className="ut-why-title">Why Choose Us?</h2>
          <p className="ut-why-intro">
            At US Logistics Ltd., we simplify dispatching so you can focus on the road. Here&apos;s what sets us apart.
          </p>
          <ul className="ut-why-list">
            <li>
              <strong>24/7 Dispatch Support</strong> — Always available to book loads, resolve issues, and keep your trucks moving.
            </li>
            <li>
              <strong>Experienced Team</strong> — Our dispatchers know the industry inside out and negotiate the best rates for you.
            </li>
            <li>
              <strong>Transparent Pricing</strong> — No hidden fees. You see exactly what you earn and what we charge.
            </li>
            <li>
              <strong>Fast Load Matching</strong> — We connect you with the right loads quickly so you spend less time empty.
            </li>
            <li>
              <strong>Dedicated Account Manager</strong> — A single point of contact who knows your fleet and your goals.
            </li>
            <li>
              <strong>Compliance & Documentation</strong> — We handle permits, paperwork, and compliance so you stay legal and on schedule.
            </li>
            <li>
              <strong>Real-Time Tracking</strong> — Stay updated on loads and payments through our systems and support.
            </li>
            <li>
              <strong>Scalable for Any Fleet Size</strong> — From one truck to hundreds, we scale our support to match your growth.
            </li>
          </ul>
        </div>
      </section>

      {/* 5th section: Services - 5 cards */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        id="services"
        style={{
          background: 'linear-gradient(135deg, #E0B0FF 0%, #F0E0FF 25%, #F8F0FF 50%, #FCFAFF 75%, #FCFAFF 100%)',
        }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">Services</h2>
            <p className="mt-2 text-[#374151] text-lg">Services designed to meet all your needs</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
            <Card className="border-2 border-purple-200/60 bg-white/95 shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-purple-100 p-2">
                    <Package className="size-5 text-purple-600" aria-hidden />
                  </span>
                  <CardTitle className="text-lg text-purple-700">Load Procurement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#374151] leading-relaxed">
                  We maintain direct relationships with shippers and trusted broker networks to secure high-quality, well-paying freight for our carriers. Our team also provides pre-booking options so you can plan routes and maximize mileage in advance.
                </p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
            <Card className="border-2 border-purple-200/60 bg-white/95 shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-purple-100 p-2">
                    <ClipboardList className="size-5 text-purple-600" aria-hidden />
                  </span>
                  <CardTitle className="text-lg text-purple-700">Dispatch Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#374151] leading-relaxed">
                  From assigning trucks and planning efficient routes to coordinating pickups and deliveries, our dispatchers handle the entire end-to-end process — ensuring smooth communication and on-time performance.
                </p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.16 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
            <Card className="border-2 border-purple-200/60 bg-white/95 shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-purple-100 p-2">
                    <FileCheck className="size-5 text-purple-600" aria-hidden />
                  </span>
                  <CardTitle className="text-lg text-purple-700">Paperwork & Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#374151] leading-relaxed">
                  We take care of all the necessary documentation — including load confirmations, bills of lading, rate cons, permits, and other compliance paperwork — so you can stay focused on the road, not the admin.
                </p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.24 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="sm:col-span-2 lg:col-span-1"
            >
            <Card className="border-2 border-purple-200/60 bg-white/95 shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-purple-100 p-2">
                    <DollarSign className="size-5 text-purple-600" aria-hidden />
                  </span>
                  <CardTitle className="text-lg text-purple-700">Factoring Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Keep your cash flow steady with our factoring assistance. We help carriers get paid faster, eliminating the long wait times that can hold up your business.
                </p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.32 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="sm:col-span-2"
            >
            <Card className="border-2 border-purple-200/60 bg-white/95 shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-purple-100 p-2">
                    <ShieldCheck className="size-5 text-purple-600" aria-hidden />
                  </span>
                  <CardTitle className="text-lg text-purple-700">Regulatory Set-Up (MC/DOT)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#374151] leading-relaxed">
                  Starting out or expanding? We assist with FMCSA registrations, MC and DOT numbers, and interstate or intrastate authority set-ups to get you on the road legally and confidently.
                </p>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - dark */}
      <section className="ut-cta-section" id="contact">
        <div className="ut-cta-sparkle" aria-hidden />
        <div className="ut-cta-inner">
          <h2 className="ut-cta-title">Your next big move just one click away.</h2>
          <div className="ut-cta-features">
            <span className="ut-cta-feature ut-cta-feature-active">One-Stop Solution</span>
            <span className="ut-cta-feature ut-cta-feature-active">Proactive Planning</span>
            <span className="ut-cta-feature">Real-time updates</span>
            <span className="ut-cta-feature">Dispatching</span>
          </div>
          <a href="#contact" className="ut-cta-btn">Get Started →</a>
        </div>
      </section>

      {/* Footer - US Logistics Ltd. dark */}
      <footer className="ut-footer">
        <div className="ut-footer-main">
          <div className="ut-footer-orb ut-footer-orb-left" aria-hidden />
          <div className="ut-footer-inner">
            <div className="ut-footer-col ut-footer-brand">
              <h3 className="ut-footer-logo">US Logistics Ltd.</h3>
              <p className="ut-footer-desc">At US Logistics Ltd., we make trucking simple, stress-free, and profitable.</p>
            </div>
            <div className="ut-footer-col ut-footer-contact">
              <h4 className="ut-footer-heading">Contact Details</h4>
              <ul className="ut-footer-list">
                <li><PhoneIcon /> Dispatch Help Desk: <a href="tel:+15733064001">(573) 306-4001</a></li>
                <li><PhoneIcon /> Dispatch: <a href="tel:+12094544111">(209) 454-4111</a></li>
                <li><PhoneIcon /> Dispatch Services: <a href="tel:+19162261743">(916) 226-1743</a></li>
                <li><PhoneIcon /> Dispatch: <a href="tel:+19165826967">(916) 582-6967</a></li>
                <li><PhoneIcon /> Dispatching Service: <a href="tel:+12105760977">(210) 576-0977</a></li>
              </ul>
            </div>
            <div className="ut-footer-col ut-footer-address">
              <h4 className="ut-footer-heading">Address & More</h4>
              <p className="ut-footer-line"><MapPinIcon /> 25140 Kingsland Blvd #144, Katy, TX 77494, USA</p>
              <p className="ut-footer-line"><MailIcon /> <a href="mailto:info@usa-transport.co">info@usa-transport.co</a></p>
              <p className="ut-footer-line"><MailIcon /> <a href="mailto:sales@usa-transport.co">sales@usa-transport.co</a></p>
              <p className="ut-footer-line"><PhoneIcon /> Syed: <a href="tel:+19513812001">(951) 381-2001</a></p>
              <p className="ut-footer-line"><PhoneIcon /> Sales: <a href="tel:+19165826968">(916) 582-6968</a></p>
              <p className="ut-footer-line"><PhoneIcon /> <a href="tel:+13075332286">+1 (307) 533-2286</a></p>
              <p className="ut-footer-line"><PhoneIcon /> <a href="tel:+19052264053">+1 (905) 226-4053</a></p>
              <div className="ut-footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">x</a>
              </div>
            </div>
          </div>
          <div className="ut-footer-orb ut-footer-orb-right" aria-hidden />
        </div>
        <div className="ut-footer-bottom">
          <p className="ut-footer-copy">©{new Date().getFullYear()} All rights reserved US Logistics Ltd.</p>
          <div className="ut-footer-bottom-right">
            <a href="#">Privacy Policy</a>
            <span className="ut-footer-legal-sep">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="ut-footer-logo-mark" aria-hidden>A</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="ut-footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg className="ut-footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="ut-footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
