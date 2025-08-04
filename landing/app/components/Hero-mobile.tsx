"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function Hero() {
  return (
    <div className="h-[30rem] md:hidden w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className=" mx-auto p-4">
        <h1 className="relative z-10  text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          KOAX
        </h1>
      
        
      </div>
      <BackgroundBeams />
    </div>
  );
}
