import React from 'react'
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { SocialIcon } from 'react-social-icons'


function Navbar() {
  const socials = ["instagram", "github", "linkedin"]
  let hover = "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";
   return (
    <div className='sticky top-2 border-b'>
      <div className='mt-2 mb-2 w-full flex justify-between'>
        <NavigationMenu className="ml-7 justify-start">
          <NavigationMenuList className="flex justify-center space-x-6">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Resume
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/publications" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Publications
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex space-x-4 mr-7 mt-1'>
          <SocialIcon url="https://www.instagram.com/tyler.kwok/"  style={{ height: 30, width: 30 }} />
          <SocialIcon url="https://www.github.com/Benler123/"  style={{ height: 30, width: 30 }} />
          <SocialIcon url="https://www.linkedin.com/in/TylerKwok/" style={{ height: 30, width: 30 }} />
          <SocialIcon url="https://www.twitter.com/in/TylerKwok/" style={{ height: 30, width: 30 }} />
        </div>
      </div>
    </div>
  )
}

export default Navbar