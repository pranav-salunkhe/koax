"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import BrokersLogo from "../../public/koax-brokers-nobg.png"
import PetWalaLogo from "../../public//petwala-nobg.png";
import KoaxTechLogo from "../../public/koax-tech-nobg.png";
import PathwayAtlasLogo from "../../public/pa-nobg.png";
import Image from "next/image";

export function Services() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Image src={KoaxTechLogo} alt="Koax Tech Logo" width={20} height={20} />}
        title="Koax Tech"
        description="All your tech needs in one place. We have you covered, at the best prices."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Image src={PathwayAtlasLogo} alt="Pathway Atlas Logo" width={20} height={20} />}
        title="PathwayAtlas"
        description="Your gateway to study abroad opportunities. We help you from start to end"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Koax.AI"
        description="Coming soon! AI solutions for your business needs."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Image src={BrokersLogo} alt="Brokers Logo" width={20} height={20} />}
        title="Brokers.Koax"
        description="Streamlining the path to owning your dream home."
      />
      

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Image src={PetWalaLogo} alt="PetWala Logo" width={20} height={20} />}
        title="PetWala"
        description="Your one-stop solution for all your pet needs. From food to grooming, we have it all."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
