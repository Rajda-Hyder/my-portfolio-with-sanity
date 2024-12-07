"use client"
import { useEffect } from "react";
import Sidebar, { SidebarItems } from "./section/sidebar";
import { GraduationCap, House, User, FolderGit, Contact, FolderGit2, Award } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
} from "../component/select";

//for aos library
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./[sidebarcomponents]/home";
import Link from "next/link";

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
          <div >
            <Select>
              <SelectTrigger>
                <SidebarItems icon={<FolderGit2 />} text="View Project" href="#Project" />
              </SelectTrigger>
              <SelectContent className="select-content">
                <SelectGroup>
                  <SelectLabel className="bg-green-300 p-2 outline-blue-500 m-3 outline-dashed "> PROJECTS</SelectLabel>
                  <SelectItem value="Project1" className="bg-blue-300 outline-green-400 m-3 outline-dotted" >Number Guessing Game</SelectItem>
                  <SelectItem value="Project2" className="bg-blue-300 outline-green-400 m-3 outline-dotted">CLI-Calculator</SelectItem>
                  <SelectItem value="Project3" className="bg-blue-300 outline-green-400 m-3 outline-dotted">Resume</SelectItem>
                  {/* <SelectItem value="Project4" className="bg-blue-300 outline-green-400 m-3 outline-dotted">Project4</SelectItem>
                  <SelectItem value="Project5" className="bg-blue-300 outline-green-400 m-3 outline-dotted">Project5</SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

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