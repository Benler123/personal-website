'use client'

import React from "react";
import Grid from "@mui/material/Grid";
import SkillsComponent from "./SkillsComponent";
import { SocialIcon } from "react-social-icons";
import { FaLink, FaVideo } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

function ProjectCard(props) {
    useEffect(() => {
        AOS.init();
        }, []);
  

  return (
    <div data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true">
        <div className= "flex md:justify-center items-center">
    <Grid
      container
      className="h-full w-full md:w-3/5 w-full rounded-lg p-5"
    >
      <Grid item md={6}>
        <div className="flex flex-wrap space-x-4 p-5 justify-end items-center transition-transform duration-200 ease-in-out hover:scale-110">
          <img
            src={props.imgSrc}
            alt="project image"
            className=" w-96 h-64 object-contain rounded-lg"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={4} sx={{ overflowY: "auto" }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-2xl font-bold  border-gray-900 text-blue-900 border-b">
              {props.name}
            </div>
            <div className="mt-3 mb-3 ">{props.description}</div>
          </div>
          <div className="flex justify-beginning pb-4 space-x-6">
            {" "}
            {/* Adjust spacing and alignment as needed */}
            {/* Example icons */}
            {Array.isArray(props.links.github) ? (
              props.links.github.map((link, index) => (
                <SocialIcon
                  key={index}
                  url={link}
                  style={{ height: 30, width: 30 }}
                />
              ))
            ) : (
              props.links.github && (
                <SocialIcon
                  url={props.links.github}
                  style={{ height: 30, width: 30 }}
                />
              )
            )}
            {props.links.link && (
                <a
              href={props.links.link}
              target="_blank"
              rel="noopener noreferrer"
                >
                <FaLink style={{ height: 30, width: 30 }} />
                </a>
            )}
            {props.links.video && (
                <a
              href={props.links.video}
              target="_blank"
              rel="noopener noreferrer"
                >
                <FaVideo style={{ height: 30, width: 30 }} />
                </a>
            )}
            {/* Add more icons as needed */}
          </div>
        </div>
      </Grid>

      <Grid item md={12}>
        <div className="flex flex-wrap md:flex-row flex-row full-width-flex md:space-x-4 md:pl-5 justify-start md:justify-center items-center">
          {props.skills.map((skill, index) => (
            <SkillsComponent key={index} skill={skill} />
          ))}
        </div>
      </Grid>
    </Grid>
    </div>
    </div>
  );
}

export default ProjectCard;
