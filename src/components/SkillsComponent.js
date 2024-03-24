import React from 'react'

function SkillsComponent(props) {
    
  return (
    <div className="m-2">
    <div className="nline-block p-1 border bg-gray-200 text-small rounded-xl hover:scale-110">
        {props.skill}
    </div>
    </div>
  )
}

export default SkillsComponent