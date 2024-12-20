"use client"
import { useEffect } from "react";
import Sidebar, { SidebarItems } from "./section/sidebar";
import { GraduationCap, House, User, FolderGit, Contact, Award } from 'lucide-react';

//for aos library
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./[sidebarcomponents]/home";

const Main = () => {
  //useEffect for aos
  useEffect(() => {
    AOS.init({
      once: false,
    })
  }, [])

  return (

    <div className="flex overflow-hidden bg-green-100 ">
      {/*Sidebar*/}
      <div className="flex w-1/4 ">
        {/* Render Sidebar with SidebarItems as children */}
        <Sidebar>

          <SidebarItems icon={<House />} text="Home" href="#home" active={true} />
          <SidebarItems icon={<User />} text="About Me" href="#about" />
          <SidebarItems icon={<GraduationCap />} text="Education" href="#Education" />
          <SidebarItems icon={<Award />} text="Skills" href="#Skills" />
          <SidebarItems icon={<FolderGit />} text="Projects" href="#Projects" />
          <SidebarItems icon={<Contact />} text="Contact Me" href="#Contact" />
          
          {/* Add more SidebarItems as needed */}

        </Sidebar>
      </div>

      {/* mainbar */}

      <div className="w-full">
        <Home />
      </div>
    </div>

  )
}

export default Main