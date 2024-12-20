import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Skill {
  SkillName: string;
  CommandOnSkill: string;
  Details: string;
  image?: string; 
  alt?: string;
}

// Fetch skills data from Sanity
async function fetchSkillsData(): Promise<Skill[]> {
  const data = await client.fetch(
    `*[_type == 'mySkills']{SkillName, CommandOnSkill, Details, image}`
  );
  return data;
}

export default async function Skills() {
  // Fetch skills data
  const data: Skill[] = await fetchSkillsData();

  // Handle empty or undefined data
  if (!data || data.length === 0) {
    return (
      <section className="text-gray-600 body-font bg-green-100">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center text-gray-900 text-lg font-medium">
            No skills found.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font bg-green-100">
      <div className="container px-5 py-24 mx-auto">
        {/* Render skills dynamically */}
        {data.map((skill, index) => (
          <div
            key={index}
            className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          >
            {/* Icon */}
            <div className="container mr-20">
            <div className="relative w-full h-64">
            {skill.image && (
                    <Image
                      src={urlFor(skill.image).url()} // Generate URL from Sanity image
                      alt={skill.SkillName || "skill Image"}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}</div>

            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2 underline">
                {skill.SkillName}
              </h2>
              <p className="font-bold text-blue-500 py-4">{skill.CommandOnSkill}</p>
              {skill.Details && (
                <p className="leading-relaxed text-base">{skill.Details}</p>
              )}
            </div>
          </div>
        ))}
        {/* Button */}
        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
          <Link href={"/"}>HOME</Link>
        </button>
      </div>
    </section>
  );
}
