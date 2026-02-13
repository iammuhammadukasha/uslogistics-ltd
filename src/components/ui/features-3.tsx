'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Headphones, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { type ReactNode } from 'react';

export function Features() {
  return (
    <section
      className="relative py-16 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E0B0FF 0%, #F0E0FF 25%, #F8F0FF 50%, #FCFAFF 75%, #FCFAFF 100%)',
      }}
    >
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-medium"
            style={{
              borderColor: '#A155F9',
              backgroundColor: '#F5EFFF',
              color: '#6d28d9',
            }}
          >
            <Star className="size-4 fill-current" aria-hidden />
            Who We Are
            <Star className="size-4 fill-current" aria-hidden />
          </span>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-[#1a1a1a] font-medium">
            We are a trusted and reliable dispatching service provider with 6+ years of experience and a proven record of 500+ happy carriers across the USA. We pride ourselves on professionalism, transparency, and long-term relationships with our carriers and shippers — ensuring every mile counts and every load pays off.
          </p>
        </div>
        <Card className="mx-auto mt-8 grid max-w-sm grid-cols-1 divide-y overflow-hidden bg-white/90 backdrop-blur-sm border-white/50 shadow-zinc-950/5 text-[#1a1a1a] md:mt-16 md:max-w-full md:grid-cols-3 md:divide-x md:divide-y-0 *:text-center">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Headphones className="size-6 text-[#6d28d9]" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-[#1a1a1a]">24/7 Dedicated Dispatcher</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#374151]">
                Always available to guide and support you on every haul.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <TrendingUp className="size-6 text-[#6d28d9]" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-[#1a1a1a]">Scalable Services</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#374151]">
                From single trucks to full fleets — our solutions grow with your business.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <CheckCircle className="size-6 text-[#6d28d9]" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium text-[#1a1a1a]">Complete Support</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#374151]">
                We&apos;re with you every step — from load pick-up to delivery.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-border">
        {children}
      </div>
    </div>
  );
}
