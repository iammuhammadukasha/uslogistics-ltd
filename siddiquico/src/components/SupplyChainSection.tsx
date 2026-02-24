"use client";

const cards = [
  {
    icon: HandshakeIcon,
    text: "We represent trusted global ethanol manufacturers in regional and international markets.",
  },
  {
    icon: ConnectIcon,
    text: "We connect verified buyers with reputable producers to ensure reliable sourcing.",
  },
  {
    icon: DocumentIcon,
    text: "We assist in communication, compliance, and documentation required for smooth transactions.",
  },
  {
    icon: LogisticsIcon,
    text: "We coordinate logistics and delivery to connect producers with buyers across regions.",
  },
  {
    icon: ChartIcon,
    text: "We provide market insights and support growth for ethanol producers and buyers.",
  },
];

function Card({
  card,
  className = "",
}: {
  card: (typeof cards)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${className}`}
    >
      <div className="mb-5 text-gray-700">
        <card.icon className="h-12 w-12 sm:h-14 sm:w-14" />
      </div>
      <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
        {card.text}
      </p>
    </div>
  );
}

export default function SupplyChainSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading + intro row */}
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Our Role in the Supply Chain
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            We act as a strategic link between ethanol producers and buyers,
            ensuring efficient coordination and reliable supply.
          </p>
        </div>

        {/* Cards: 3 top, 4th and 5th centered below */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.slice(0, 3).map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {cards.slice(3, 5).map((card, i) => (
            <Card key={i + 3} card={card} className="w-full max-w-sm" />
          ))}
        </div>
      </div>
    </section>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ConnectIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function LogisticsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1v-4m0-4V6a1 1 0 011-1h2a1 1 0 011 1v10m-5 0a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1m0 0v-4" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
