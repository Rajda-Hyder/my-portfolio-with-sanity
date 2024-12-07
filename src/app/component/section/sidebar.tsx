"use client";

import Image from "next/image";
import { useContext, useEffect, useState, createContext, ReactNode, MouseEvent } from "react";
import logo from "../image/logo1.2.jpg";
import image from "../image/myphoto.jpg";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";

// Define the type for the context value
interface SidebarContextType {
  expanded: boolean;
}

// Create the context with the correct type
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(true);

  // useEffect for handling responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false); // Collapse sidebar on smaller screens
      } else {
        setExpanded(true); // Expand sidebar on larger screens
      }
    };

    // Check initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-blue-50 border-r shadow-sm">
        {/* Logo and toggle button */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src={logo}
            alt="Rajda"
            width={300}
            height={300}
            className={`overflow-hidden transition-all ${
              expanded ? "w-20 h-20" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-green-200 hover:bg-blue-200"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar content */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Footer */}
        <div className="border-t flex p-5">
          <Image src={image} alt="Rajda" width={300} height={300} className="w-10 h-10 rounded-md" />
          <div
            className={`flex justify-center items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-snug">
              <h4 className="font-semibold hover:text-green-700">Syeda Rajda Bano</h4>
              <span className="text-sm text-gray-800 hover:text-green-700">
                rajdahyder@gmail.com
              </span>
            </div>
            <MoreVertical size={30} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

// Define the props type for SidebarItems
interface SidebarItemsProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  href: string;
};

export function SidebarItems({ icon, text, active, alert, href }: SidebarItemsProps) {
  const context = useContext(SidebarContext);

  // Ensure context is defined
  if (!context) {
    throw new Error("SidebarItems must be used within a Sidebar");
  }

  const { expanded } = context;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-200 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
            invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </a>
  );
}
