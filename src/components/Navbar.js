'use client';

import React from "react";
import Link from "next/link";
import { FaDownload, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { SocialIcon } from "react-social-icons";

function Navbar() {
  const isMdScreen = useMediaQuery({ minWidth: 768 })
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setIsOpen(isMdScreen);
  }, [isMdScreen]);

  const socials = ["instagram", "github", "linkedin"];
  let hover =
    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";
  return (
    <div className="fixed top-0 w-full border-b bg-white z-50">
      <div>
          <button className='text-3xl md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>
      <div className={`md:w-full flex-col md:flex-row items-center justify-between ${isOpen ? 'flex' : 'hidden'}`}>
        <NavigationMenu className="md:ml-7 justify-start">
          <NavigationMenuList className="flex-col md:flex-row md:space-x-6">
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#workexperience" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://scholar.google.com/citations?hl=en&user=HZwJJdgAAAAJ"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={hover}>
                  Publications
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/TylerKwokResume.pdf"
                download="TylerKwokResume.pdf"
                className="hover"
                style={{
                  color: "#00008B",
                  textDecoration: "underline",
                  display: "flex",
                }}
              >
                Resume{" "}
                <FaDownload style={{ marginLeft: "10px", marginTop: "2px" }} />
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex space-x-4 md:mr-7 mt-2 mb-2">
          <SocialIcon
            url="https://www.instagram.com/tyler.kwok/"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.github.com/Benler123/"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/TylerKwok/"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.twitter.com/in/TylerKwok/"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
