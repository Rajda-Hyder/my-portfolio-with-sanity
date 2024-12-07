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
            name: "image",
            type :"image",
            title :"image",
            options: {
                accept: 'image/png'
              }
            
        }
    ],
}