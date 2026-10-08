export interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  category: "major" | "minor";
  /** Omit for projects with nothing public to link to yet. */
  link?: string;
  repo?: string;
  featured?: boolean;
  status?: string;
}

// Real client and org work. Keep descriptions in step with resume.md.
export const projects: Project[] = [
  {
    index: "01",
    title: "Momikie's POS",
    description:
      "A point-of-sale and store management system delivered to a general merchandise store and bakery, covering sales, inventory, products, expenses, and reporting. Includes a customer credit (“utang”) ledger with credit limits, statements of account, and aging reports, plus role-based access and an audit log of price overrides, voids, and edits. A companion Flutter tablet app keeps the store selling through power outages and prints to thermal receipt printers.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SQLite / libSQL (Turso)",
      "Flutter",
      "Vercel",
    ],
    year: "2026",
    category: "major",
    featured: true,
  },
  {
    index: "02",
    title: "RCMS — Rotary Club Dues Tracker",
    description:
      "A web app that replaced the Rotary Club of Metro Sorsogon treasurer's spreadsheet for tracking member dues and cash flow per fiscal year. Balances and totals are computed from recorded payments so they can't drift out of sync. Shipped with CSV member import and two Flutter apps: a read-only one for members and an admin one for the club officer.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL)",
      "Flutter",
      "Vercel",
    ],
    year: "2026",
    category: "major",
  },
  {
    index: "03",
    title: "Lingkod",
    description:
      "A student organization management system in development, replacing scattered per-committee spreadsheets with one record for all six committees. Built around a three-tier access model — President, Executive Officer, Junior Councilor — that controls who can view and edit each committee's records, with individual logins per officer.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite"],
    year: "2026",
    category: "major",
    status: "In Development",
  },
  {
    index: "04",
    title: "Busay Garden",
    description:
      "A responsive business website for a hydroponic lettuce and arugula supplier in Busay, Daraga, Albay, presenting the business, its products, and contact details.",
    tags: ["React", "Vite"],
    year: "2026",
    link: "https://busaygarden.vercel.app",
    category: "minor",
  },
];
