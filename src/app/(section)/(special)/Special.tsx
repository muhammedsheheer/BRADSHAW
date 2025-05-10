"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center overflow-hidden bg-[#000] pt-12">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/hero/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Animated Vertical Lines */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-32 top-20 hidden md:block">
        <h6
          className="font-oswald text-start text-4xl font-[400] uppercase md:text-4xl"
          style={{
            background: "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bradshaw <br /> Specials
        </h6>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-10 pt-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="relative flex w-full flex-col items-center justify-center gap-2">
              <motion.h6
                className="font-oswald text-center text-4xl font-[400] uppercase md:hidden md:text-5xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Bradshaw Specials
              </motion.h6>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
