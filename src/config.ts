export const SOCIALS = [
    {
      name: "GitHub",
      link: "https://github.com/joshudd",
      icon: "github.png",
    },
    {
      name: "Email",
      link: "mailto: josh25dickinson@gmail.com",
      icon: "email.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joshuadickinson111/",
      icon: "linkedin.png",
    },
] satisfies {
    name: string;
    link: string;
    icon: string;
}[];
export const SKILLS = [
  // {
  //   name: "JavaScript",
  // },
  {
    name: "ElysiaJS",
  },
  {
    name: "Bun",
  },
  {
    name: "React.js",
  },
  {
    name: "GraphQL",
  },
  {
    name: "JUCE",
  },
  {
    name: "P5.js",
  },
  {
    name: "Java",
  },
  {
    name: "Python",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "OCaml",
  },
] satisfies {
  name: string;
}[];
export const PROJECTS = [
  {
    name: "Hall Plotter",
    link: "https://github.com/doggu/gophergrades",
    tech: "JavaScript",
    desc: "Mapping out a user's day-to-day schedule from Schedule Builder to a map to provide insight on what their commute between/around campuses will look like.",
  },
  {
    name: "Date Engine",
    link: "https://github.com/joshudd/date-engine",
    tech: "React.js, GraphQL",
    desc: "A Monday.com app that adds functionality to date columns.",
  },
  {
    name: "Gibberisher",
    link: "https://github.com/joshudd/gibberisher",
    tech: "Java",
    desc: "A trie-based model that generates pronounceable gibberish.",
  },
  {
    name: "SodiumTrack",
    link: "https://github.com/joshudd/sodiumtrack",
    tech: "Python",
    desc: "A nutrition tracker that implements user accounts and food recommendations based on criteria.",
  },
] satisfies {
  name: string;
  link: string;
  tech?: string;
  desc: string;
}[];