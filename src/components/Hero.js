'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react';

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center pb-40 border-b">
      <div className="flex justify-between items-center w-full max-w-4xl px-5">
        <div>
        </div>
        <div className="flex-0 flex justify-center">
          <div>
          <TypeAnimation
            sequence={[
              `Hello, I'm Tyler! I'm a Developer, \n and a Student at Georgia Tech!`,
            ]}
            speed={50}
            style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
          />
        </div>
        </div>
        <div className="flex-0 flex justify-end">
          <img src="/Headshot.png" className="w-52 h-52 rounded-full border-3 border-black " alt="Avatar" />
        </div>
      </div>
    </div>
  )
}

export default Hero


