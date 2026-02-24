import { PricingInteractionDemo } from "@/components/ui/pricing-interaction-demo";
import Header from "@/components/Header";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-100 py-20 flex items-center justify-center px-4">
        <PricingInteractionDemo />
      </main>
    </>
  );
}
