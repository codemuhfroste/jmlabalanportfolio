export interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  repo: string;
  category: "major" | "minor";
  featured?: boolean;
}

// Project Bloom is the real flagship project — edit its details as the
// project grows. The rest are placeholders, swap them for your own work.
export const projects: Project[] = [
  {
    index: "01",
    title: "Project Bloom",
    description:
      "A team project built to help small businesses bloom — giving them the digital tools to establish an online presence and grow. Currently in active development.",
    tags: ["Team Project", "Small Business", "Web App"],
    year: "2026",
    link: "#",
    repo: "#",
    category: "major",
    featured: true,
  },
  {
    index: "02",
    title: "Busay Garden",
    description:
      "A website for a hydroponic farm in Daraga, Albay, growing fresh lettuce and arugula using soil-free growing methods.",
    tags: ["Next.js", "Web App"],
    year: "2026",
    link: "https://busaygarden.vercel.app",
    repo: "#",
    category: "minor",
  },
  {
    index: "03",
    title: "Console Central PH",
    description:
      "A Philippines-based site for gaming console sales, rentals, or services.",
    tags: ["Next.js", "Web App"],
    year: "2026",
    link: "https://consolecentralph.vercel.app",
    repo: "#",
    category: "minor",
  },
];
