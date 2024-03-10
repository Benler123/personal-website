import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/Projects";
import Footer from "@/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WorkExperience/>
      <Projects/>
      <Footer/>
      <Analytics/>
      <SpeedInsights/>
    </>
  );
}
