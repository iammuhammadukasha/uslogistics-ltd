export default function OurOfficesSection() {
  return (
    <section id="our-offices" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Our Offices
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <OfficeCard
            city="Karachi"
            address="Suite 401, 4th Floor, ABC Tower, Block 5, Clifton"
            phone="+92 322 2123098"
          />
          <OfficeCard
            city="Lahore"
            address="Plot 12, Main Boulevard, Gulberg III"
            phone="+92 42 35761234"
          />
          <OfficeCard
            city="Dubai"
            address="Office 1202, Dubai International Financial Centre"
            phone="+971 4 123 4567"
          />
        </div>
      </div>
    </section>
  );
}

function OfficeCard({
  city,
  address,
  phone,
}: {
  city: string;
  address: string;
  phone: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-slate-50/50 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
      <p className="mt-3 text-gray-600">{address}</p>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="mt-3 inline-block text-gray-700 font-medium hover:text-gray-900"
      >
        {phone}
      </a>
    </div>
  );
}
