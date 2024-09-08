
export type Project = {
    link: string;
    name: string;
    description: string;
    summary: string;
    tools: string[];
    image: string | null;
    external_link: string | null;
    display_link: string | null;
};

export const projects: Project[] = [
    {
        link: "honey",
        name: "honey",
        description: 
            "I've been producing music on my laptop since middle school and the idea for this project has been sitting with me for a while: a plug-in that I could use to make music with. " + 
            "Creating something simple, but also powerful has been very rewarding. Through this project, I've learned so much about audio programming, digital signal processing, and the JUCE framework.",
        summary: "audio VST3 plug-in",
        tools: ["C++", "JUCE", "React.js"],
        image: "honey.png",
        external_link: "hey",
        display_link: "github.com/joshudd/honey",
    },
    {
        link: "sketchwithfriends",
        name: "Sketch with Friends",
        description: 
            "An online multiplayer game built by a friend & me. " + 
            "Players take turns drawing and guessing each other's drawings. The real-time logic is built with Go, and the frontend is built with React.js.",
        summary: "online collaborative drawing game",
        tools: ["Go", "React.js"],
        image: null,
        external_link: null,
        display_link: null,
    },
    {
        link: "transitpal",
        name: "TransitPal",
        summary: "web tool for tracking public transit usage",
        description: "web tool for tracking public transit usage",
        tools: ["next.js", "firebase", "recharts", "tailwind"],
        image: null,
        external_link: "https://devpost.com/software/locomotive-vgufn5",
        display_link: "devpost.com/transitpal",
    },
    {
        link: "dateengine",
        name: "Date Engine",
        summary: "Monday.com app",
        description: "Monday.com app",
        tools: ["react.js", "graph ql", "Monday.com API"],
        image: null,
        external_link: null,
        display_link: null,
    },
    {
        link: "sodiumtrack",
        name: "SodiumTrack",
        summary: "nutrition tracking tool",
        description: "nutrition tracking tool",
        tools: ["python", "sqlite"],
        image: null,
        external_link: null,
        display_link: null,
    },
    {
        link: "gibberisher",
        name: "Gibberisher",
        summary: "gibberish text generator",
        description: "gibberish text generator",
        tools: ["java"],
        image: null,
        external_link: null,
        display_link: null,
    },
];