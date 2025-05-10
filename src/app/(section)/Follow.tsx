import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/Icon";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] pt-12 md:pt-24">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* big screen */}
      <div className="z-40 hidden flex-col gap-8 md:flex md:gap-20">
        <div className="z-40 flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <motion.h5
            className="pb-16 text-center font-oswald text-4xl font-[400] capitalize md:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scroll Us
          </motion.h5>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="z-40 flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/elpuebloliverpool/"}>
                <Icons.instagram className="h-24 w-24 text-[#E2B583]" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/elpuebloliverpool/"}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#E2B583] md:text-xl"
                >
                  @rokabolton
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/*mobile view */}
      <div className="z-40 flex flex-col gap-8 md:hidden md:gap-20">
        <div className="z-40 flex w-full flex-col gap-4 px-4 md:px-[60px] 2xl:px-[80px]">
          <motion.h5
            className="pb-10 text-center font-oswald text-4xl font-[400] capitalize md:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Scroll Us
          </motion.h5>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="z-40 flex w-full flex-col items-center justify-center gap-2 md:mt-16 md:w-[25%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              {/* <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-12"
              /> */}
              <Link href={"https://www.instagram.com/elpuebloliverpool/"}>
                <Icons.instagram className="h-24 w-24 text-[#E2B583]" />
              </Link>
              <div>
                <Link
                  href={"https://www.instagram.com/elpuebloliverpool/"}
                  target="_blank"
                  className="text-md text-center font-open_sans font-[400] uppercase text-[#E2B583] md:text-xl"
                >
                  @rokabolton
                </Link>
              </div>
            </motion.div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="w-full md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            {/* <div className="w-full md:w-[50%]">
              {" "}
              <motion.img
                src={"/images/home/follow/5.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div> */}

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <motion.img
                src={"/images/home/follow/6.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[200px] w-full object-cover md:h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
