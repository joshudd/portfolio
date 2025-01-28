export type Project = {
  link: string;
  name: string;
  description: string;
  summary: string;
  tools: string[];
  images: string[] | null;
  external_link: string | null;
  display_link: string | null;
};

export const projects: Project[] = [
  {
    link: "honey",
    name: "honey",
    description:
      "A plug-in that I built and use to make music. " +
      "Creating something simple, but also powerful has been very rewarding. Through this project, I've learned so much about audio programming, digital signal processing (specifically Reverb and Bitcrusher algorithms), and the JUCE framework. The UI is built with React.js.",
    summary: "audio VST3 plug-in",
    tools: ["C++", "JUCE", "React.js"],
    images: ["honey.png"],
    external_link: "",
    display_link: "",
  },
  {
    link: "sketchwithfriends",
    name: "Sketch with Friends",
    description:
      "Developing a multiplayer drawing game with a friend. " +
      "Players take turns drawing and guessing each other's drawings. The real-time logic is built with Go, and the frontend is built with React.js.",
    summary: "online collaborative drawing game",
    tools: ["Go", "React.js"],
    images: ["sketchwithfriends.png"],
    external_link: null,
    display_link: null,
  },
  {
    link: "transitpal",
    name: "TransitPal",
    summary: "web tool for tracking public transit usage",
    description:
      "Allows you to enter the trips you take on public transit during your everyday life in order to see visual estimates of the positive impact, both environmentally and financial, that choosing public transportation has.",
    tools: ["Nextjs", "Firebase", "Recharts", "TailwindCSS", "Google Maps API"],
    images: ["transitpal.jpeg"],
    external_link: "https://devpost.com/software/locomotive-vgufn5",
    display_link: "devpost.com/transitpal",
  },
  {
    link: "hallplotter",
    name: "Hall Plotter",
    summary: "Chrome Extension feature",
    description:
      "Feature built for the popular UMN grades tool, GopherGrades. The hall plotter feature allows students to visualize the pathing of their class schedule while registering for classes. It works as part of the Chrome Extension version of GopherGrades.",
    tools: ["JavaScript"],
    images: null,
    external_link: "https://umn.lol",
    display_link: "umn.lol",
  },
  {
    link: "portfolio",
    name: "Portfolio",
    summary: "this website!",
    description:
      "The website you're looking at!",
    tools: ["Nextjs", "TailwindCSS"],
    images: null,
    external_link: "https://github.com/joshudd/portfolio",
    display_link: "github.com/joshudd/portfolio",
  },
  {
    link: "sisterscamelot",
    name: "Sisters' Camelot",
    summary: "website redesign for a local nonprofit",
    description:
      "Me and a partner redesigned the website for a local nonprofit, Sisters' Camelot. We did a couple rounds of user research and testing to make sure we were meeting the needs of the users. In the end, we created a few high fidelity mockups that were a step up in user experience.",
    tools: ["Figma", "User Research"],
    images: ["sisterscamelot_1.png", "sisterscamelot_2.png"],
    external_link: null,
    display_link: null,
  },
  {
    link: "dateengine",
    name: "Date Engine",
    summary: "Monday.com app",
    description:
      'A Monday.com app that I built for a client. It adds functionality to "date" columns in Monday boards that were previously lacking.',
    tools: ["React.js", "GraphQL", "Monday.com API"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "runstencil",
    name: "RunStencil",
    summary: "running utility app UI design",
    description:
      "Designed a tracking app for runners from start to finish with a team of 5. A couple rounds of user research and testing were done to make sure we were meeting the needs of the users.",
    tools: ["Figma", "User Research"],
    images: ["runstencil_1.png", "runstencil_2.png"],
    external_link: null,
    display_link: null,
  },
  {
    link: "sodiumtrack",
    name: "SodiumTrack",
    summary: "nutrition tracking tool",
    description:
      "A nutritional tracker that implements user accounts and food recommendations based on criteria.",
    tools: ["Python", "SQLite"],
    images: null,
    external_link: "https://github.com/joshudd/sodiumtrack",
    display_link: "github.com/joshudd/sodiumtrack",
  },
  {
    link: "gibberisher",
    name: "Gibberisher",
    summary: "gibberish text generator",
    description: "A trie-based model that generates pronounceable gibberish.",
    tools: ["Java"],
    images: ["gibberisher.png"],
    external_link: "https://github.com/joshudd/gibberisher",
    display_link: "github.com/joshudd/gibberisher",
  },
];
