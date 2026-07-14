import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-14 w-auto", light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/logo.png"
        alt="EAZYKREDIT Logo"
        className={className}
      />
      <div className="flex flex-col select-none">
        <div className="flex items-baseline">
          <span className={`font-extrabold text-2xl tracking-tight leading-none ${light ? 'text-white' : 'text-black'}`}>
            Eazy
          </span>
          <span className={`font-extrabold text-2xl tracking-tight leading-none ${light ? 'text-primary-blue' : 'text-dark-blue'}`}>
            Kredit
          </span>
        </div>
        <span className={`font-bold text-[8px] tracking-[1.5px] leading-none mt-1.5 whitespace-nowrap ${light ? 'text-white/70' : 'text-text-gray'}`}>
          YOUR TRUSTED LOAN PARTNER
        </span>
      </div>
    </div>
  );
}
