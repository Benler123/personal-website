import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/Projects";
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WorkExperience/>
      <Projects/>
    </>
  );
}
