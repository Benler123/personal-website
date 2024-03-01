import React from "react";
import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  const marketMatchSkils = [
    "React",
    "Next.JS",
    "Python",
    "FastAPI",
    "GCP SQL",
    "MongoDB",
    "AWS EC2",
  ];
  let marketMatchDict = {
    "github": "https://github.com/AlexT101/market-match",
    "video": "https://devfolio.co/projects/place-fb93",
    "link": "https://www.marketmatch.tech/",
  }

  const ottoTASkills = ["React", "Next.JS", "Python", "FastAPI", "GCP SQL",  "AWS EC2"]
  const ottoTADict = {
    "github": "https://github.com/msteele3/otto-ta",
    "video": "https://devpost.com/software/ottota"
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="flex text-3xl mb-5 mt-5 ">PROJECTS.</h1>
    
      <ProjectCard
        name="Market Match"
        skills={marketMatchSkils}
        imgSrc="MarketMatch.png"
        description=" A gamified approach to portfolio building based on tinder. Create
              a tailored list of stocks based on preferences and past swipes."
        links={marketMatchDict}
      />
    <ProjectCard
        name="OttoTA"
        skills={ottoTASkills}
        imgSrc="ottota.png"
        description=" A gamified approach to portfolio building based on tinder. Create
              a tailored list of stocks based on preferences and past swipes."
        links={ottoTADict}
      />
    </div>
  );
}

export default Projects;
