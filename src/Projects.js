"use client";

import React from "react";
import ProjectCard from "./components/ProjectCard";
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
    github: "https://github.com/AlexT101/market-match",
    video: "https://devfolio.co/projects/place-fb93",
    link: "https://www.marketmatch.tech/",
  };

  const captioningOnGlassSkills = ["C++", "OpenGL", "Multi-threading"];
  const captioningOnGlassDict = {
    github:
      "https://github.com/Captioning-on-Glass/Group-Conversation-Simulation/tree/sdl",
    link: "https://dl.acm.org/doi/pdf/10.1145/3544794.3558468",
  };

  const captioningOnVRSkills = ["Unity 3D", "C#", "MongoDB"];
  const captioningOnVRDict = {
    github: "https://github.com/Benler123/CaptioningOnVR"
  };

  const ottoTASkills = [
    "React",
    "Next.JS",
    "Python",
    "FastAPI",
    "GCP SQL",
    "AWS EC2",
    "LangChain",
  ];
  const ottoTADict = {
    github: "https://github.com/msteele3/otto-ta",
    video: "https://devpost.com/software/ottota",
  };

  const symmtetrySkills = ["React", "FastAPI", "Python", "GCP SQL"];
  const symmetryDict = {
    github: "https://github.com/Benler123/symmetry",
    video:
      "https://devpost.com/software/symmetry-uvohn3?ref_content=my-projects-tab&ref_feature=my_projects",
  };

  const popSignSkills = ["Python", "Docker", "PyQt5", "MariaDB"];
  const popSignDict = {
    github:
      "https://github.com/Benler123/hotkey_annotate/blob/main/fast_annotate.py",
    video: "https://www.youtube.com/watch?v=WC9x3jp_nV8&ab_channel=Google",
    link: "https://www.popsign.org/",
  };

  const roboRoamSkills = [
    "Python",
    "PyGame",
    "KartoSLAM",
    "Autonomous Navigation",
  ];
  const roboRoamDict = {
    github: "https://github.gatech.edu/skakkad6/CS-4230-SLAM-Robotics",
  };

  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <h1 className="flex text-3xl mb-5 scroll-mt-10" id="projects">
        PROJECTS.
      </h1>
      <ProjectCard
        name="Captioning on Glass"
        skills={captioningOnGlassSkills}
        imgSrc="COG.jpg"
        description="Captioning on Glass is a research project that investigates to use of smart glasses to provide real-time captioning for group conversations. I was a devloper on the system to emulate group conversations in a virtual environment using SDL a library build upon. This work was published at Ubicomp/ISWC 2022."
        links={captioningOnGlassDict}
      />
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
      <ProjectCard
        name="PopSign Annotation Tool"
        skills={popSignSkills}
        imgSrc="popsign.png"
        description="I founded and maintain a tool used to annotate isolated sign language data used for training sign language recognition models used in PopSign AI. The resulting dataset is the largest isolated sign language dataset in existence and PopSign was showcased at Google IO."
        links={popSignDict}
      />
      <ProjectCard
        name="RoboRoam"
        skills={roboRoamSkills}
        imgSrc="roboroam.png"
        description="RoboRoam is a KartoSLAM toolbox allowing users to run custom SLAM simulations and visualize the results in a 2d environment. The simulation has features such as scan matching, path planning via algorithms such as RRT."
        links={roboRoamDict}
      />
    </div>
  );
}

export default Projects;
