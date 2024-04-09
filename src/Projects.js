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

  const captioningOnGlassSkills = ["C++", "OpenGL", "threading", "SDL", "Android", "Sensors"];
  const captioningOnGlassDict = {
    github:
      "https://github.com/Captioning-on-Glass/Group-Conversation-Simulation/tree/sdl",
    link: "https://dl.acm.org/doi/pdf/10.1145/3544794.3558468",
  };

  const captioningOnVRSkills = ["Unity 3D", "C#", "MongoDB", "React", "Next.JS"];
  const captioningOnVRDict = {
    github: ["https://github.com/Benler123/CaptioningOnVR", "https://github.com/AlexT101/captioning-frontend"],
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
        name="Captioning on VR"
        skills={captioningOnVRSkills}
        imgSrc="CoVR.jpg"
        description="I led the migratation of the Captioning on Glass system to a virtual reality environment. The system leverages a front-end client with a MongoDB backend to pass parameters to the application running on the Quest 3. The system is fully paramerterized allowing researchers to manipulate variables such as offset, FOV, alpha, and more. We are currently implementing eye tracking with the Meta Quest Pro to provide gaze metrics."
        links={captioningOnVRDict}
      />
      <ProjectCard
        name="Captioning on Glass"
        skills={captioningOnGlassSkills}
        imgSrc="COG.jpg"
        description="Captioning on Glass is a research project that investigates to use of smart glasses to provide real-time captioning for group conversations. I was a devloper on the system to emulate group conversations in a virtual environment using SDL a library build upon OpenGL. This work was published at Ubicomp/ISWC 2022."
        links={captioningOnGlassDict}
      />
      <ProjectCard
        name="Market Match"
        skills={marketMatchSkils}
        imgSrc="MarketMatch.png"
        description="A gamified approach to portfolio building based on tinder. Create
              a tailored list of stocks based on preferences and past swipes. Users input their preferred risk levels and begin swiping on tickers. For each ticker, we provide LLM generated insigthts and sentiment analysis of recent news surrounding the company. We also provide various technical metrics to help user's make informed decisions. After creating a portfolio, we leverage Markowitz's Modern Portfolio Theory to provide a diversified portfolio that maximizes returns and minimizes risk."
        links={marketMatchDict}
      />
      <ProjectCard
        name="OttoTA"
        skills={ottoTASkills}
        imgSrc="ottota.png"
        description="OttoTA is a personalized teaching assistant that connects to student's Canvas accounts and provides tailored study resources. Students pass in their personalized developer API tokens allowing Otto to scrape lecture notes, assignments, and other files to provide personalized practice questions, flashcards, and quizzes."
        links={ottoTADict}
      />
      <ProjectCard
        name="Symmetry"
        skills={symmtetrySkills}
        imgSrc="symmetry.png"
        description="Symmetry provides advanced analytics on developer productivity based on screenshots taken throughout the day. These metrics are provided on a dashboard to promote transparency and accountability. The Symmetry system is composed of two parts. The first is a light weight daemon that is deployed on work laptops to periodically take screen shots and batch deliver them to the Symmetry server. The second is a web dashboard that provides quantitative and qualitative analysis team productivity and achievements."
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
