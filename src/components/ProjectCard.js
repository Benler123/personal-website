import React from 'react'
import Grid from '@mui/material/Grid';

function ProjectCard(props) {

  return (
      <div className="w-96 h-64 rounded-lg border-gray-400 border-2 m-3">
          <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid item md= {12} sx={{display:'flex' , justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <div className="text-lg font-bold">
              {props.title}
            </div>
            <div className="text-xs italic">
              {props.startDate + " - " + props.endDate}
            </div>
            </Grid>
            <Grid item md={6} sx={{height:'40%', display:'flex' , justifyContent:'center', alignItems:'center'}}>
                <img src={props.imageSrc} alt="project image" className="w-24 h-24 object-cover rounded-lg" />
            </Grid>
            <Grid item md={6} sx={{height:'40%', display:'flex', justfyContent:'center', alignItems:'center'}}>
              {props.description}
            </Grid>
            <Grid item md={12} sx={{height:'20%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="flex space-x-4">
                {/* <img src="/next.svg" alt="project image" className="w-8 h-8 object-cover rounded-lg" />
                <img src="/Django_icon.png" alt="project image" className="w-8 h-8 object-cover rounded-lg" />
                <img src="/React_icon.png" alt="project image" className="w-8 h-8 object-cover rounded-lg" /> */}

                {props.techStack.map((tech) => (
                  <img src={tech} alt="project image" className="w-12 h-12 object-cover rounded-lg" />                  
                )
                   )}
              </div>
              </Grid>
          </Grid> 
      </div>
  );  
}

export default ProjectCard