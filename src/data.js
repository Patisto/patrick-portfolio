export const profile = {
  name: { first: "Patrick", last: "Solomon" },
  tagline: "Full-Stack Developer | AI Engineer | System Architect",
  email: "patricksolomon.dev@gmail.com",
  github: "https://github.com/Patisto",
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-solid fa-code",
    skills: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    skills: ["Node.js", "Supabase", "Neon", "Nginx"],
  },
  {
    title: "AI & Systems",
    icon: "fa-solid fa-robot",
    skills: ["RAG", "MCP", "AI Integration", "System Architecture"],
  },
  {
    title: "Tools",
    icon: "fa-solid fa-terminal",
    skills: ["Git", "GitHub", "Linux", "PM2"],
  },
];

export const projects = [
  {
    id: "student-planner",
    title: "Student Planner App",
    url: "https://student-planner-app.com",
    image: "https://picsum.photos/seed/student-planner/640/420",
    desc: "An academic planning tool for students to manage grades, schedules and AI-assisted study workflows.",
    points: [
      "Developed the grade calculator logic",
      "Integrated AI features",
      "Worked on the backend using Supabase",
    ],
    tags: ["React", "Supabase", "AI"],
  },
  {
    id: "metmma-academy",
    title: "MetMMA Academy",
    url: "https://metmmaacademy.com",
    image: "https://picsum.photos/seed/metmma-academy/640/420",
    desc: "A martial arts academy website built to showcase programs, coaching staff and class schedules.",
    points: ["Contributed to the frontend design"],
    tags: ["React", "Frontend"],
  },
  {
    id: "chisapi-org",
    title: "Chisapi Org",
    url: "https://chisapiorg.patisto.me",
    image: "https://picsum.photos/seed/chisapi-org/640/420",
    desc: "A full-stack solo build delivering an organizational web presence end-to-end, from design to deployment.",
    points: ["Solo project — full-stack design, build and deployment"],
    tags: ["Full-Stack", "React", "Supabase"],
  },
  {
    id: "futecai",
    title: "FutecAI",
    url: "https://futecai.com",
    image: "https://picsum.photos/seed/futecai/640/420",
    desc: "A Malawian tech company's website and content platform, including a custom CMS for managing site content.",
    points: ["Developed the CMS functionality", "Worked on frontend pages"],
    tags: ["Node.js", "CMS", "React"],
  },
];

export const blogPosts = [
  {
    id: "vibe-coding",
    title: "Vibe Coding: Building Fast Without Losing the Plot",
    excerpt:
      "Why moving fast with AI-assisted tools doesn't have to mean sloppy architecture — and how I keep 'vibe coding' sessions grounded in real system design.",
    image: "https://picsum.photos/seed/vibe-coding/640/420",
    category: "Development",
    date: "2026-05-12",
    tags: ["AI", "Workflow", "React"],
  },
  {
    id: "information-systems-career",
    title: "What an Information Systems Degree Actually Prepares You For",
    excerpt:
      "Information Systems sits between business and computer science — here's how that mix has shaped my path into full-stack development and AI engineering.",
    image: "https://picsum.photos/seed/info-systems/640/420",
    category: "Career",
    date: "2026-04-02",
    tags: ["Career", "University", "IS"],
  },
];
