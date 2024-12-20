//import type { Rule } from "@sanity/types";
export const skills = {
    name: "mySkills",
    type: "document",
    title: "My Skills",
    fields: [
        {
            name: "SkillName",
            type: "string",
            title: "Skill Name",
        },
        {
            name: "CommandOnSkill",
            type: "string",
            title: "Command On Skill",
        },
        {
            name: "Details",
            type: "string",
            title: "Details",
        },
        {
            title: 'image',
            name: 'image',
            type: 'image'
          },
        //   {
        //     name: "href",
        //     type :"url",
        //     title :"Link",
        //     validation: (Rule:Rule) => Rule.uri({ scheme: ["http", "https"] }),
            
        // }
    ],
}