import Footer from "@/components/Footer";
import GetInTouchSection from "@/components/GetInTouchSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupplyChainSection from "@/components/SupplyChainSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import { PricingInteractionDemo } from "@/components/ui/pricing-interaction-demo";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SupplyChainSection />
      <WhoWeAreSection />
      <WhyChooseSection />
      <section id="our-offices" className="bg-slate-100 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Our Offices
          </h2>
          <div className="flex justify-center">
            <PricingInteractionDemo />
          </div>
        </div>
      </section>
      <GetInTouchSection />
      <Footer />
    </>
  );
}
