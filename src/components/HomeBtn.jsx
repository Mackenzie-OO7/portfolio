"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";
import icon from "../../public/assets/selfie.png";

const NavLink = motion(Link);

const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50"
      aria-label={"home"}
      name={"home"}
      prefetch={false}
    >
      <span className="relative w-14 h-14 p-0 hover:text-accent">
        <Image
          src={icon}
          alt="A selfie of my bitmoji serving as the home button"
          // width={56} 
          // height={56} 
          className="rounded-full object-cover"
        />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;