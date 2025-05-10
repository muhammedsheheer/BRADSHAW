import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "A La Carte", image: "/images/home/menu/1.png" },
  { title: "Drinks Menu", image: "/images/home/menu/2.png" },
  { title: "Desserts", image: "/images/home/menu/3.png" },
  { title: "Kid’s", image: "/images/home/menu/4.png" },
];

const Menu: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-8 md:py-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col gap-16 px-4 md:px-0">
        {/* Title */}
        <h1
          className="text-center font-oswald text-4xl font-[400] tracking-[3px] md:text-5xl"
          style={{
            background: "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BRADSHAW MENU
        </h1>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <Link href={""} target="_blank">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-cover"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </Link>
              <h1
                className="text-center font-oswald text-xl font-bold tracking-[-1px] md:text-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Description & CTA */}
        <motion.div
          className="z-40 flex flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="z-40 max-w-[600px] font-inter text-sm font-[400] text-[#7E6C53] md:text-base">
            At Bradshaw Bar & Grill, our menu is a celebration of bold
            Mediterranean flavors and timeless culinary craftsmanship. Every
            dish is thoughtfully prepared with passion and precision, drawing
            inspiration from the coastal kitchens of Southern Europe. Whether
            you`re joining us for a casual evening or a special occasion,
            Bradshaw offers a warm, welcoming atmosphere where every plate tells
            a story of flavor, tradition, and modern flair.
          </p>
          <Link href="/menu">
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#CDAE64] px-6 py-6 font-manrope text-sm font-[600] uppercase text-black hover:bg-[#c3a96c] md:px-5 md:py-6">
              Order Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
