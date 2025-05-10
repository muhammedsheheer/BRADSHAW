import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000] pb-0 pt-10 md:pb-0 md:pt-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/about/bg1.png"}
          alt="background"
          width={1024}
          height={564}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="z-40 flex flex-col gap-2">
        <div>
          <motion.h5
            className="text-center font-oswald text-4xl font-[400] uppercase md:text-4xl"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About us
          </motion.h5>
        </div>
        <motion.div
          className="z-40 mb-60 ml-0 flex flex-row items-center justify-center gap-4 px-4 md:ml-60"
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h6
            className="z-40 mt-40 hidden text-start font-times_new_roman text-[250px] font-[400] uppercase md:mt-0 md:block md:text-[350px]"
            style={{
              background:
                "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            B
          </h6>
          <div className="flex flex-col gap-5">
            <p className="max-w-[400px] text-center font-inter text-sm font-[400] text-[#7E6C53] md:text-start md:text-base">
              More than just a restaurant, Bradshaw is a place to gather — where
              laughter echoes across the table, the wine flows freely, and the
              experience lingers long after the last course. Whether it’s a
              relaxed weekday dinner or a festive celebration, we invite you to
              enjoy the flavors of the Mediterranean in a setting that feels
              like home, elevated by attentive service and a welcoming ambiance.
            </p>
            <h6
              className="hidden text-start font-oswald text-4xl font-[400] uppercase md:block md:text-4xl"
              style={{
                background:
                  "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              RADSHAW
            </h6>
            <h6
              className="text-center font-oswald text-4xl font-[400] uppercase md:hidden md:text-4xl"
              style={{
                background:
                  "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              bRADSHAW
            </h6>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
