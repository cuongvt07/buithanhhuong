export interface ContentBlock {
    type: 'paragraph' | 'grid';
    content?: string;
    items?: { title: string; desc: string }[];
}

export interface ThoughtArticle {
    intro: string;
    blocks: ContentBlock[];
}

export const DEFAULT_ARTICLE: ThoughtArticle = {
    intro: "The intersection of digital weightlessness and architectural permanence.",
    blocks: [
        {
            type: 'paragraph',
            content: "This project explores the transformation of static data into dynamic spatial experiences. By treating digital interfaces as architectural sites, we can create environments that respond to the user's intent with the same gravity and presence as a physical building."
        },
        {
            type: 'grid',
            items: [
                {
                    title: "Movement Analysis",
                    desc: "Tracking micro-interactions to understand how users \"navigate\" through information hierarchies."
                },
                {
                    title: "Spatial UI",
                    desc: "Developing components that occupy space relative to user attention, mimicking depth and distance."
                }
            ]
        },
        {
            type: 'paragraph',
            content: Array(10).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ").join(" ")
        }
    ]
};
