export interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  repo: string;
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
    featured: true,
  },
  {
    index: "02",
    title: "Project Title Two",
    description:
      "A short one or two sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2025",
    link: "#",
    repo: "#",
  },
  {
    index: "03",
    title: "Project Title Three",
    description:
      "A short one or two sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["Java", "Android", "Firebase"],
    year: "2025",
    link: "#",
    repo: "#",
  },
  {
    index: "04",
    title: "Project Title Four",
    description:
      "A short one or two sentence summary of what this project does, the problem it solves, and your role in building it.",
    tags: ["Python", "Flask", "MySQL"],
    year: "2024",
    link: "#",
    repo: "#",
  },
];
