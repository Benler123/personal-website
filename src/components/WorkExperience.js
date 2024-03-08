import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";


function WorkExperience() {
  const amazonStack = ["/spring.png", "/aws.png", "/java.png"];
  const nasaStack = ["/cpp.png", "/java.png", "/rhel.png"];
  const gtriStack = ["/python.png", "/tensorflow.png", "/docker.png"];
  const gtStack =[ "/python.png", "/cpp.png", "/docker.png", "/unity.png", "openGL.png"]
  const wealthfrontStack = [];

  return (
    <div id="workexperience" data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true">
    <div className="border-b">
    <div className="mb-5">
    <h1 className="flex justify-center text-3xl mb-5 mt-5">
      WORK EXPERIENCE.
    </h1>
    <div className="flex w-full justify-center flex-col ">
      <div className="flex w-full justify-center items-center flex-col md:flex-row">
      <WorkExperienceCard
        key="Wealthfront Internship"
        title="Software Engineer Intern"
        imageSrc="Wealthfront_logo.png"
        startDate="May 2024"
        endDate="August 2024"
        description="TBD"
        techStack={wealthfrontStack}
      />
      <WorkExperienceCard
        key="Amazon Internship"
        title="Software Engineer Intern"
        imageSrc="Amazon_icon.png"
        startDate="May 2023"
        endDate="August 2023"
        description="Amazon Fresh Automatic Inventory Replenishment"
        techStack={amazonStack}
      />
      <WorkExperienceCard
        key="NASA Internship"
        title="Software Engineer Intern"
        imageSrc="hm.png"
        startDate="August 2022"
        endDate="May 2022"
        description="Artemis I Space Launch System Control Software"
        techStack={nasaStack}/>
      </div>
      <div className="flex w-full justify-center items-center flex-col md:flex-row">
      <WorkExperienceCard
              key="GTRI Internship"
              title="Machine Learning Engineer Intern"
              imageSrc="gtri_logo.jpeg"
              startDate="May 2022"
              endDate="August 2022"
              description="Electronic Systems Laboratory MLOps"
              techStack={gtriStack}
            />
      <WorkExperienceCard
          key="GT Research"
          title="Undergraduate Researcher"
          imageSrc="gt.png"
          startDate="November 2021"
          endDate="Present"
          description="Captioning on Glass and Popsign under Professor Thad Starner"
          techStack={gtStack}
      />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default WorkExperience;
