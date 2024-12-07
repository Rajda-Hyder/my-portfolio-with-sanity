import Images from "./image/page"
import About from "./[sidebarcomponents]/About"
import Contact from "./[sidebarcomponents]/contact"
import Education from "./[sidebarcomponents]/education"
import Projects from "./[sidebarcomponents]/projects"
import Skills from "./section/skills"
export default function Links() {
  return (
    <div>
      <section id="about" className="h-full"> {/* About Section */}
        <h1 className="text-center text-6xl font-pacifico font-extrabold bg-green-100">About Me</h1>
        <div className="bg-blue-200 p-16">
          <Images />
          <About />

        </div>
      </section>

      <section id="Education"> {/* Education Section */}
        <h1 className="text-center text-6xl font-pacifico font-extrabold bg-green-100">Education</h1>
        <div className="bg-blue-200 p-16">
        <Images />
        <Education />
        </div>
      </section>

      <section id="Skills"> {/* Skills Section */}
        <h1 className="text-center text-6xl font-pacifico font-extrabold bg-green-100">Skills</h1>
        <div className="bg-blue-200 p-16">
        <Images />
        <Skills />
        </div>
      </section>

      <section id="Projects" className="h-full"> {/* Projects Section */}
        <h1 className="text-center text-6xl font-pacifico font-extrabold bg-green-100">Projects</h1>
        <div className="bg-blue-200 p-16">
        <Images />
         <Projects />
        </div>
      </section>

      <section id="Contact"> {/* Contact Section*/}
        <h1 className="text-center text-6xl font-pacifico font-extrabold bg-green-100">Contact Me</h1>
        <div className="bg-blue-200 p-16">
          <Images />
          <Contact />
        </div>
      </section>
    </div>
  )
}