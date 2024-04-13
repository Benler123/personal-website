'use client'
import React from "react";
import Grid from "@mui/material/Grid";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WorkExperienceCard(props) {
    useEffect(() => {
    AOS.init();
    }, []);

  return (
    <div id="workexperience" data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true">
      <div className="w-96 h-64 rounded-lg border-gray-600 border-2 m-3 font-sans shadow-lg transition-transform duration-200 ease-in-out hover:scale-105">
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="text-lg font-bold font-sans text-blue-900 justify-center">
              {props.title}
            </div>
            <div className="text-xs italic">
              {props.startDate + " - " + props.endDate}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "40%",
            }}
          >
            <div className="flex space-x-4 pl-5 justify-center items-center">
              <img
                src={props.imageSrc}
                alt="project image"
                className="w-24 h-24 object-contain rounded-lg"
              />
              <div>{props.description}</div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="flex space-x-4">
              {props.techStack.map((tech, index) => (
                <img
                  key={index}
                  src={tech}
                  alt="project image"
                  className="w-10 h-10 object-contain rounded-lg"
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
