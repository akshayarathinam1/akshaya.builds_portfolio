export interface Project {
  id: string;
  number: string;
  date?: string;
  title: string;
  type?: string;
  client?: string;
  role?: string;
  industry?: string;
  status?: string;
  description: string;
  longDescription: string;
  thinking?: string;
  tags: string[];
  href: string;
  github?: string;
  liveUrl?: string;
}

export interface Skill {
  label: string;
}

export const projects: Project[] = [
  {
    id: "project-01",
    number: "PROJECT 01",
    date: "Jan 2024",
    title: "Zoe Smiles",
    type: "Web Development",
    client: "Modominds",
    role: "Complete website build",
    status: "Live for the clinic",
    description:
      "A website for a multispeciality dental clinic, bringing treatment information, patient testimonials, and appointment enquiries together in one place.",
    longDescription:
      "Helping patients find the care they need.\n\nChoosing a dental clinic starts with finding the right information. I built the Zoe Smiles website to help visitors explore available treatments, learn about the clinic, read patient testimonials, and enquire about an appointment.",
    thinking:
      "Make the important information easy to find.\n\nThe website brings the clinic's services, patient information, testimonials, location, and appointment enquiry options together. The aim is to make it easier for visitors to understand what the clinic offers and decide how to get in touch.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://zoesmiles.in/",
    liveUrl: "https://zoesmiles.in/",
  },
  {
    id: "project-02",
    number: "PROJECT 02",
    date: "Aug 2023",
    title: "Modominds",
    type: "Web Development",
    client: "Modominds",
    role: "Web Development · Modominds",
    status: "Live Website",
    description:
      "A digital growth website bringing brand strategy, performance marketing, product development, and AI solutions together under one roof.",
    longDescription:
      "Modominds helps businesses connect marketing, technology, and growth.\n\nThe website brings its services together in one place, helping potential clients understand what the company offers and explore the right solutions for their business.",
    thinking:
      "Make services easy to understand.\n\nThe goal was to make Modominds' services easy to understand and help businesses find the right solutions without feeling overwhelmed by too many options.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://modominds.com/",
    liveUrl: "https://modominds.com/",
  },
  {
    id: "project-03",
    number: "PROJECT 03 · E-COMMERCE CONCEPT",
    title: "Aurevia",
    type: "Concept e-commerce platform",
    industry: "Skincare & beauty",
    status: "Concept · Not live",
    description:
      "A skincare e-commerce concept exploring a clean shopping experience, thoughtful product presentation, and simple product discovery.",
    longDescription:
      "Aurevia is a concept e-commerce platform for a skincare brand.\n\nI created this project to explore how a skincare store could present its products and make online shopping feel simple and intuitive.",
    thinking:
      "Choosing skincare can be confusing.\n\nI wanted to explore a shopping experience that keeps the focus on the products, makes browsing straightforward, and gives the brand a clean, consistent identity.",
    tags: ["Next.js", "Tailwind CSS", "Python", "Django"],
    href: "#",
  },
];

export const skills: Skill[] = [
  { label: "Full-Stack Dev" },
  { label: "UI / UX Design" },
  { label: "Open Source" },
  { label: "Problem Solving" },
  { label: "TypeScript" },
  { label: "Design Systems" },
];

export const socials = {
  github: "https://github.com/akshayarathinam1",
  linkedin: "https://www.linkedin.com/in/akshaya-builds/",
  email: "hello.akshayabuilds@gmail.com",
  phone: "+91 98845 85959",
  whatsapp: "https://wa.me/919884585959",
};
