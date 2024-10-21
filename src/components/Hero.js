"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMdScreen = useMediaQuery({ minWidth: 768 });
  const [isOpen, setIsOpen] = useState(!isMdScreen);

  return (
    <div
      className="h-screen flex justify-center items-center pb-40 border-b"
      id="about"
    >
      <div className="flex md:flex-row flex-col justify-between items-center h-full w-full max-w-4xl px-5 ">
        {/* <div className="flex justify-between items-center w-full max-w-4xl px-5">
         */}
        <div></div>
        <div className="flex-0 flex ">
          <div>
            <TypeAnimation
              sequence={[
                "Hello, I am Tyler!",
              ]}
              speed={50}
              style={{ whiteSpace: "pre-line", fontSize: "2em" }}
            />
          </div>
        </div>
        <div className="flex-0 flex justify-end">
          <img
            src="/Headshot.png"
            className="w-52 h-52 md:w-72 md:h-72 rounded-full border-3 border-black "
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
