import React from 'react'

function ProjectCard(props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-100% h-100% bg-white shadow-lg rounded-lg">
        <img src="https://i.pravatar.cc/150?img=2" alt="Project" className="w-64 h-40 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">Project Title</h3>
          <p className="text-sm text-gray-500">Project Description</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard