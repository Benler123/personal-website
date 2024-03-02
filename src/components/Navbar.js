import React from 'react'
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

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
    <div className='sticky top-0 border-b bg-white z-50'>
      <div className=' w-full flex justify-between'>
        <NavigationMenu className="ml-7 justify-start">
          <NavigationMenuList className="flex justify-center space-x-6">
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  About
                </NavigationMenuLink>
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
              <Link href="https://scholar.google.com/citations?hl=en&user=HZwJJdgAAAAJ" legacyBehavior passHref>
                <NavigationMenuLink className={hover}>
                  Publications 
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <a href="/TylerKwokResume.pdf" download="TylerKwokResume.pdf" className="hover" style={{color:'#00008B', textDecoration: 'underline', display:'flex'}}>
              Resume <FaDownload style={{ marginLeft: '10px', marginTop:'2px'}} />
            </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex space-x-4 mr-7 mt-2 mb-2'>
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