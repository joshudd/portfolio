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
    link: "wave",
    name: "Wave",
    description:
      "1st Place Winner at MinneHack '25! Wave is a social music discovery platform that transforms Spotify listening data into interactive 3D visualizations called 'ripples'. Using custom clustering algorithms, it creates dynamic music communities based on genre patterns, enabling users to discover like-minded listeners and organize concert outings.",
    summary: "social music discovery platform with 3D visualizations",
    tools: ["Next.js", "React", "Three.js", "PostgreSQL", "TypeScript"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "ai-ethics-chat",
    name: "Self-Hosted AI Ethics Chat",
    description:
      "A RAG-enabled AI chat application that analyzes ethical questions through six distinct philosophical frameworks (utilitarian, justice, rights, common good, virtue, and care ethics). Built with Flask, WebSockets for real-time streaming, ChromaDB for vector search, and Ollama for local LLM inference. Features automatic document indexing, conversation persistence, and containerized deployment with Docker Compose.",
    summary: "RAG-powered ethics analysis chat system",
    tools: ["Python", "Flask", "Ollama", "ChromaDB", "Docker", "WebSocket"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "sketchwithfriends",
    name: "Sketch with Friends",
    description:
      "Sketch with Friends is a real-time, multiplayer, web-based drawing game. Players take turns drawing and guessing words with their friends or people from around the world!",
    summary: "real-time multiplayer drawing and guessing game",
    tools: ["Go", "React.js"],
    images: ["sketchwithfriends-demo.gif"],
    external_link: "https://sketchwithfriends.com",
    display_link: "sketchwithfriends.com",
  },
  {
    link: "ape-cli",
    name: "ape-cli",
    description:
      "A Python CLI tool that automatically syncs climbing workout data from Kilterboard to Notion. Features intelligent polling with adaptive backoff, local caching for performance, and journal-style formatting that preserves user notes. Built for climbers who want automated workout tracking.",
    summary: "automated climbing workout tracker",
    tools: ["Python", "Notion API", "Kilterboard API"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "vaul7",
    name: "vaul7",
    description:
      "A native macOS application for Logic Pro users featuring real-time audio waveform visualization, file tree browsing, and AppleScript integration. Built with SwiftUI and AVFoundation, it streamlines audio sample selection and management for music production workflows.",
    summary: "macOS audio file manager for Logic Pro",
    tools: ["Swift", "SwiftUI", "AVFoundation"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "midi-controller",
    name: "BLE MIDI Controller",
    description:
      "An embedded MIDI step sequencer built on AVR microcontroller with Bluetooth Low Energy wireless connectivity. Features 8-step sequencing, real-time parameter editing, and an OLED display + other peripherals.",
    summary: "embedded BLE MIDI step sequencer",
    tools: ["C", "AVR", "Bluetooth LE", "Embedded Systems"],
    images: null,
    external_link: null,
    display_link: null,
  },
  {
    link: "vst-plugin",
    name: "VST Plugin",
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
    link: "drone-sim",
    name: "Drone Transit Simulation",
    description:
      "A full-stack simulation system featuring autonomous drone package delivery with real-time 3D visualization. Built with C++ backend using WebSocket communication and TypeScript/Three.js frontend, implementing multiple pathfinding algorithms (A*, BFS, DFS, Dijkstra) for route optimization.",
    summary: "real-time 3D transit simulation",
    tools: ["C++", "TypeScript", "Three.js", "WebSocket"],
    images: null,
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
    description: "The website you're looking at, designed and built by me :)",
    tools: ["Nextjs", "TailwindCSS"],
    images: null,
    external_link: "https://github.com/joshudd/portfolio",
    display_link: "github.com/joshudd/portfolio",
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
