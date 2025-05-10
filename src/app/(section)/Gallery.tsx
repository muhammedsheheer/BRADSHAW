import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-8 md:px-20 md:py-14">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <h1
            className="text-center font-oswald text-5xl font-[400] tracking-[3px] md:text-9xl"
            style={{
              background:
                "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GALLERY
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/1.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/2.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/3.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/4.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/5.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full">
            <motion.img
              src="/images/home/gallery/6.png"
              alt="1"
              className="z-50 h-[200px] w-full object-cover md:h-[400px]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
