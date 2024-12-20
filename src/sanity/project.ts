import type { Rule } from "@sanity/types";

export const project = {
    name: "myProject",
    type: "document",
    title: "My Project",
    fields: [
        {
            name: "projectName",
            type: "string",
            title: "Project Name",
        },
        {
            name: "ProjLang",
            type: "string",
            title: "Project Language",
        },
        {
            name: "ProjDetails",
            type: "string",
            title: "Project Details",
        },
        {
            name: "image",
            type: "image",
            title: "image",

        },
        {
         name: "href",
        type : "url",
        title : "Link",
        validation: (Rule: Rule) => Rule.uri({ scheme: ["http", "https"] }),

        }
    ],
}