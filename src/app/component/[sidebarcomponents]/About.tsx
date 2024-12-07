import {
    SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiPython,
    SiReact,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiNodedotjs
} from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiDeviceLine } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import Link from "next/link";

export default function About() {

    return (
        <div className="relative min-h-screen bg-green-100">
            {/* Icon Section */}
            <div className="absolute top-10 left-20 flex-col gap-16 text-6xl hidden md:hidden lg:flex">
                {/* Icon with Original Colors */}
                <SiNextdotjs className="text-black" title="Next.js" />
                <SiTypescript className="ml-20 rotate-12 text-[#3178C6]" title="TypeScript" />
                <SiJavascript className="text-[#F7DF1E] -rotate-12" title="JavaScript" />
                <SiTailwindcss className="ml-28 text-[#06B6D4]" title="Tailwind CSS" />
                <SiPython className="text-[#3776AB]" title="Python" />
            </div>
            {/* Icon Section - Right Side */}
            <div className="absolute top-10 right-20 flex-col gap-16 text-6xl hidden md:hidden lg:flex">
                <SiReact className="mr-5 text-[#61DAFB]" title="React" />
                <SiHtml5 className="ml-20 -rotate-12 text-[#E34F26]" title="HTML5" />
                <SiCss3 className="mr-28 rotate-12 text-[#1572B6]" title="CSS3" />
                <SiGithub className="ml-28 text-black" title="GitHub" />
                <SiNodedotjs className="text-[#339933]" title="Node.js" />
            </div>

            <div>
                <h1 className="text-center font-pacifico text-2xl font-bold text-wrap">"Creating seamless digital experiences
                    with clean code and modern design."</h1>
                <div className="flex items-start mt-16 justify-center min-h-screen">
                    <div className="w-2/4 h-1/3 p-8 bg-white shadow-md rounded-lg border text-center hover:shadow-lg hover:bg-gray-50 transition">
                        <p className="text-gray-700 text-lg font-semibold">Hi! I'm <span className="font-serif">
                            Syeda Rajda Bano</span>, a<strong className="text-blue-500"> Full Stack Developer</strong> passionate about crafting modern,
                            responsive, and user-focused web applications.</p>

                        {/* Icons for Skills */}

                        <div className="flex justify-center mt-6 gap-6 text-4xl">
                            <SiNextdotjs className="text-blue-500 hover:text-green-400" title="Next.js" />
                            <SiTypescript className="text-blue-500 hover:text-green-400" title="TypeScript" />
                            <SiJavascript className="text-yellow-400 hover:text-green-400" title="JavaScript" />
                            <SiTailwindcss className="text-blue-400 hover:text-green-400" title="Tailwind CSS" />
                            <SiPython className="text-green-500 hover:text-blue-400" title="Python" />
                        </div>

                        <p> With a strong command of<span className="underline hover:text-blue-600"> Next.js, TypeScript,
                            JavaScript,Tailwind CSS, HTML</span>, and<span className="underline hover:text-blue-600">
                                Python</span>,I specialize in turning complex ideas into functional, efficient solutions.

                            Whether I'm building intuitive user interfaces or designing scalable back-end systems, I take pride
                            in delivering applications that are both visually appealing and performance-optimized.</p>

                        {/* Icons for Highlights */}

                        <div className="flex justify-center mt-6 gap-6 text-3xl">
                            <AiOutlineThunderbolt className="text-blue-500 hover:text-green-400" title="Performance Optimization" />
                            <RiDeviceLine className="text-gray-500 hover:text-green-400" title="Responsive Design" />
                            <BiCodeAlt className="text-blue-400 hover:text-green-400" title="Code and Projects" />
                        </div>
                        <p className="text-gray-700 text-lg font-semibold mt-4"> My favorite tools include<span className="font-extrabold text-blue-500"> Next.js</span> for its flexibility,
                            TypeScript for robust code, and Tailwind CSS for clean,<span className="font-semibold text-gray-800">responsive design</span>.

                            I’m constantly expanding my skill set, staying up-to-date with the latest technologies,
                            and exploring innovative solutions to solve real-world problems. My ultimate goal is to contribute
                            to projects that make a meaningful impact.

                            When I’m not coding, I enjoy exploring new design trends. Check out my
                            <Link href={"#Projects"}>
                                <button className="hover:bg-green-400 text-white bg-blue-400 px-2"> projects</button></Link>
                            or <Link href={"#Contact"}> <button className="hover:bg-green-400 text-white bg-blue-400 px-2">reach out</button> </Link>—I'd love to connect!
                            {/* button */}
                            <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                                <Link href={"#"}>HOME</Link>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}