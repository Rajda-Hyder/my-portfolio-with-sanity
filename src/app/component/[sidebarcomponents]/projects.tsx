import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // A helper to generate image URLs

interface Project {
  projectName: string;
  ProjLang: string;
  ProjDetails: string;
  image: any; // Use a specific type if your image object has a defined structure
  href: string;
}

// Fetch data from Sanity
async function projData() {
  const fetchData = await client.fetch(
    `*[_type == 'myProject']{projectName, ProjLang, ProjDetails, image, href}`
  );
  return fetchData;
}

export default async function Projects() {
  // Fetch project data
  const data:Project[] = await projData();

  // Handle empty or undefined data
  if (!data || data.length === 0) {
    return (
      <section className="text-gray-600 body-font bg-green-100">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center text-gray-900 text-lg font-medium">
            No projects found.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <div className="h-auto p-6 bg-green-100">
  <Card className="h-auto p-6 bg-green-100">
    <CardContent>
      <section className="text-gray-600 body-font h-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Map through project data */}
            {data.map((item, i) => (
              <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative h-72">
                  {/* Render image */}
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()} // Generate URL from Sanity image
                      alt={item.projectName || "Project Image"}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay with project details */}
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-500">
                    <h2 className="tracking-widest text-sm title-font font-extrabold text-center text-indigo-600 mb-3 underline uppercase">
                      {item.ProjLang || "No Language Specified"}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center uppercase">
                      {item.projectName || "Untitled Project"}
                    </h1>
                    <p className="leading-relaxed line-clamp-3">
                      {item.ProjDetails || "No details provided for this project."}
                    </p>
                    <Link href={item.href || "#"} target="_blank">
                      <p className="mt-7 font-semibold hover:text-blue-600 hover:underline text-right">
                        View Project
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CardContent>

    {/* Back to Home Button */}
    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
      <Link href="/">HOME</Link>
    </button>
  </Card>
</div>
)}