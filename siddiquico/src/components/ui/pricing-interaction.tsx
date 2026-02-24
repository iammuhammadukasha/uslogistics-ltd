"use client";

import React from "react";

export function PricingInteraction({
  starterMonth: _starterMonth,
  starterAnnual: _starterAnnual,
  proMonth: _proMonth,
  proAnnual: _proAnnual,
}: {
  starterMonth: number;
  starterAnnual: number;
  proMonth: number;
  proAnnual: number;
}) {
  const [active, setActive] = React.useState(0);
  const [period, setPeriod] = React.useState(0);

  const addresses = [
    "Suite 401, Block 5, Clifton, Karachi, Pakistan",
    "1-2-3 Shibuya, Minato-ku, Tokyo, Japan",
  ];
  const phoneNumbers = ["+92 322 2123098", "+81 3 1234 5678"];
  const email = "info@siddiquico.com";

  const handleChangePlan = (index: number) => {
    setActive(index);
  };

  const handleChangePeriod = (index: number) => {
    setPeriod(index);
  };

  return (
    <div className="border-2 rounded-[32px] p-3 shadow-md w-full max-w-[768px] flex flex-col items-center gap-3 bg-white">
      <div className="rounded-full relative w-full bg-slate-100 p-1.5 flex items-center">
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20"
          onClick={() => handleChangePeriod(0)}
        >
          Karachi
        </button>
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20"
          onClick={() => handleChangePeriod(1)}
        >
          Japan
        </button>
        <div
          className="p-1.5 flex items-center justify-center absolute inset-0 w-1/2 z-10"
          style={{
            transform: `translateX(${period * 100}%)`,
            transition: "transform 0.3s",
          }}
        >
          <div className="bg-white shadow-sm rounded-full w-full h-full"></div>
        </div>
      </div>
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        <div
          className="w-full flex justify-between cursor-pointer border-2 border-gray-400 p-4 rounded-2xl"
          onClick={() => handleChangePlan(0)}
        >
          <div className="flex flex-col items-start">
            <p className="font-semibold text-xl text-gray-950">Address</p>
            <p className="text-slate-600 text-sm mt-1">
              {addresses[period]}
            </p>
          </div>
          <div
            className="border-2 border-slate-500 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center"
            style={{
              borderColor: `${active === 0 ? "#000" : "#64748b"}`,
              transition: "border-color 0.3s",
            }}
          >
            <div
              className="size-3 bg-black rounded-full"
              style={{
                opacity: `${active === 0 ? 1 : 0}`,
                transition: "opacity 0.3s",
              }}
            ></div>
          </div>
        </div>
        <div
          className="w-full flex justify-between cursor-pointer border-2 border-gray-400 p-4 rounded-2xl"
          onClick={() => handleChangePlan(1)}
        >
          <div className="flex flex-col items-start">
            <p className="font-semibold text-xl text-gray-950">Phone Number</p>
            <p className="text-slate-600 text-sm mt-1 font-medium">
              {phoneNumbers[period]}
            </p>
          </div>
          <div
            className="border-2 border-slate-500 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center"
            style={{
              borderColor: `${active === 1 ? "#000" : "#64748b"}`,
              transition: "border-color 0.3s",
            }}
          >
            <div
              className="size-3 bg-black rounded-full"
              style={{
                opacity: `${active === 1 ? 1 : 0}`,
                transition: "opacity 0.3s",
              }}
            ></div>
          </div>
        </div>
        <div
          className="w-full flex justify-between cursor-pointer border-2 border-gray-400 p-4 rounded-2xl"
          onClick={() => handleChangePlan(2)}
        >
          <div className="flex flex-col items-start">
            <p className="font-semibold text-xl text-gray-950">Email</p>
            <p className="text-slate-600 text-sm mt-1 font-medium break-all">
              {email}
            </p>
          </div>
          <div
            className="border-2 border-slate-500 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center"
            style={{
              borderColor: `${active === 2 ? "#000" : "#64748b"}`,
              transition: "border-color 0.3s",
            }}
          >
            <div
              className="size-3 bg-black rounded-full"
              style={{
                opacity: `${active === 2 ? 1 : 0}`,
                transition: "opacity 0.3s",
              }}
            ></div>
          </div>
        </div>
        <div
          className="w-full h-[88px] absolute top-0 border-[3px] border-black rounded-2xl pointer-events-none"
          style={{
            transform: `translateY(${active * 88 + 12 * active}px)`,
            transition: "transform 0.3s",
          }}
        ></div>
      </div>
      <button className="rounded-full bg-black text-lg text-white w-full p-3 active:scale-95 transition-transform duration-300">
        Contact Us
      </button>
    </div>
  );
}
