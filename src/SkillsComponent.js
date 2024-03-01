import React from 'react'

function SkillsComponent(props) {
    
  return (
    <div className="m-2">
    <div className="inline-block p-1 border bg-gray-200 text-small rounded-xl">
        {props.skill}
    </div>
    </div>
  )
}

export default SkillsComponent