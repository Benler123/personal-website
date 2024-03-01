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

  const ottoTASkills = ["React", "Next.JS", "Python", "FastAPI", "GCP SQL",  "AWS EC2", "LangChain"]
  const ottoTADict = {
    "github": "https://github.com/msteele3/otto-ta",
    "video": "https://devpost.com/software/ottota"
  }

  const symmtetrySkills = ["React", "FastAPI", "Python", "GCP SQL"];
  const symmetryDict = {
    "github": "https://github.com/Benler123/symmetry",
    "video": "https://devpost.com/software/symmetry-uvohn3?ref_content=my-projects-tab&ref_feature=my_projects"
  }

  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <h1 className="flex text-3xl mb-5 scroll-mt-10" id='projects'>PROJECTS.</h1>

      <ProjectCard
        name="Market Match"
        skills={marketMatchSkils}
        imgSrc="MarketMatch.png"
        description="A gamified approach to portfolio building based on tinder. Create
              a tailored list of stocks based on preferences and past swipes."
        links={marketMatchDict}
      />
    <ProjectCard 
        name="OttoTA"
        skills={ottoTASkills}
        imgSrc="ottota.png"
        description="OttoTA is a personalized teaching assistant that connects to student's Canvas accounts and provides tailored study resources."
        links={ottoTADict}
      />
    <ProjectCard 
        name="Symmetry"
        skills={symmtetrySkills}
        imgSrc="symmetry.png"
        description="Symmetry provides advanced analytics on developer productiy based on screenshots taken throughout the day. These metrics are provided on a dashboard to promote transparency and accountability."
        links={symmetryDict}
      />
      </div>
  );
}

export default Projects;
