import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
    </>
  );
}
