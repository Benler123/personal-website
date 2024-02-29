import React from 'react'
import ProjectCard from './ProjectCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Projects() {
  const amazonStack= ["/spring.png", "/aws.png", "java.png"]
  return (
    <ProjectCard title="Software Engineer Intern" imageSrc="Amazon_icon.png" startDate="May 2023" endDate="August 2023" description="Amazon Fresh Automatic Inventory Replenishment" techStack={amazonStack}/>
  ) 
}

export default Projects