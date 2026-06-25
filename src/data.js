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
    image: "https://i.ibb.co/9kTWCptr/Screenshot-from-2026-06-25-11-44-32.png",
    desc: "An academic planning tool for students to manage grades, schedules and AI-assisted study workflows.",
    points: [
      "Developed the grade calculator logic",
      "Integrated AI features",
      "Worked on the backend using Supabase",
    ],
    tags: ["React", "Supabase", "AI"],
    detailedDescription: `
      <p>The Student Planner App is a comprehensive academic management tool designed to help students stay organized and optimize their study time. Built with a focus on user experience and practical utility, the app combines traditional planning features with modern AI assistance.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Grade Calculator</strong> — Students can input their current grades and weightings to calculate their overall GPA and project final scores</li>
        <li><strong>Schedule Management</strong> — Integrated calendar system for tracking classes, assignments, and exam dates</li>
        <li><strong>AI Study Assistant</strong> — Powered by AI to help break down complex topics, generate study schedules, and provide personalized learning recommendations</li>
        <li><strong>Progress Tracking</strong> — Visual dashboards showing academic progress over time with actionable insights</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>I developed the grade calculation engine that handles various grading systems (weighted, unweighted, plus/minus scales). The backend is built on Supabase, providing real-time data synchronization and authentication. The AI integration uses a custom API to deliver contextual study suggestions based on the student's current coursework and performance.</p>
      
      <h2>Challenges & Solutions</h2>
      <p>One of the main challenges was creating a flexible grade calculation system that could adapt to different institutional grading standards. I solved this by building a configurable grading schema system that allows users to customize their grading scale. Another challenge was ensuring the AI recommendations were actually helpful rather than generic — this required fine-tuning the prompts and incorporating the student's actual course data into the context.</p>
    `,
  },
  {
    id: "metmma-academy",
    title: "MetMMA Academy",
    url: "https://metmmaacademy.com",
    image: "https://i.ibb.co/WWFLmKfG/Screenshot-from-2026-06-25-11-44-53.png",
    desc: "A School website that allows parents to admit their children to the school online.",
    points: ["Contributed to the frontend design"],
    tags: ["React", "Frontend"],
    detailedDescription: `
      <p>MetMMA Academy is a modern school website designed to streamline the admissions process and provide parents with easy access to information about the institution. The site features a clean, professional design that reflects the academy's commitment to excellence in education.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Online Admissions Portal</strong> — Parents can complete the entire application process online, including form submissions and document uploads</li>
        <li><strong>School Information</strong> — Comprehensive sections covering curriculum, facilities, faculty, and extracurricular activities</li>
        <li><strong>Responsive Design</strong> — Fully optimized for mobile devices, ensuring accessibility for all parents</li>
        <li><strong>Contact & Inquiry System</strong> — Integrated forms for questions and campus visit requests</li>
      </ul>
      
      <h2>My Contribution</h2>
      <p>I focused on the frontend design and implementation, working closely with the design team to translate their vision into a functional React application. This included building reusable components, implementing responsive layouts, and ensuring smooth user interactions throughout the admissions flow.</p>
      
      <h2>Technical Approach</h2>
      <p>The site uses React for the frontend with a component-based architecture that makes it easy to maintain and extend. I implemented modern CSS techniques for styling, including CSS Grid and Flexbox for layouts, and ensured the site meets accessibility standards for all users.</p>
    `,
  },
  {
    id: "chisapi-org",
    title: "Chisapi Org",
    url: "https://chisapiorg.patisto.me",
    image: "https://i.ibb.co/Vc03sQVX/Screenshot-from-2026-06-25-11-45-17.png",
    desc: "A full-stack solo build delivering an organizational web presence end-to-end, from design to deployment.",
    points: ["Solo project — full-stack design, build and deployment"],
    tags: ["Full-Stack", "React", "Supabase"],
    detailedDescription: `
      <p>Chisapi Org is a complete organizational website that I built as a solo project, handling every aspect from initial concept to final deployment. The project showcases my ability to deliver end-to-end full-stack solutions.</p>
      
      <h2>Project Scope</h2>
      <ul>
        <li><strong>Full-Stack Development</strong> — Built both the frontend and backend from scratch using React and Supabase</li>
        <li><strong>Database Design</strong> — Designed and implemented the database schema to support the organization's data needs</li>
        <li><strong>Authentication System</strong> — Implemented secure user authentication with role-based access control</li>
        <li><strong>Content Management</strong> — Created a custom CMS for easy content updates without developer intervention</li>
        <li><strong>Deployment</strong> — Managed the entire deployment process including CI/CD setup and production monitoring</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <p>The application uses React for the frontend with a modular component structure. Supabase handles the backend, providing database, authentication, and real-time subscriptions. The deployment uses modern infrastructure with automated backups and monitoring to ensure reliability.</p>
      
      <h2>Key Learnings</h2>
      <p>This project taught me the importance of planning before coding — having a clear architecture and database design saved countless hours during development. I also learned valuable lessons about balancing feature scope with delivery timelines, and how to make smart trade-offs when building solo.</p>
    `,
  },
  {
    id: "Tmm",
    title: "TMM-Terminal Sensie",
    url: "https://github.com/Patisto/tmm-proto",
    image: "https://i.ibb.co/q3GWg0Yg/Whats-App-Image-2026-06-25-at-12-02-24.jpg",
    desc: "An open source lightweight terminal companion that works both online and offline, uses grok and ollama models",
    points: ["Solo project", "Integrated AI models"],
    tags: ["Node.js", "AI", "Terminal"],
    detailedDescription: `
      <p>TMM (Terminal Sensie) is an open-source terminal companion that brings AI assistance directly to your command line. It's designed to be lightweight, fast, and capable of working both online and offline, making it perfect for developers who want AI help without leaving their terminal.</p>
      
      <h2>Core Features</h2>
      <ul>
        <li><strong>Dual AI Support</strong> — Works with both Grok (online) and Ollama (offline) models, giving you flexibility based on your connectivity and privacy needs</li>
        <li><strong>Terminal Integration</strong> — Seamlessly integrates into your terminal workflow with natural commands and intuitive interactions</li>
        <li><strong>Context Awareness</strong> — Can read and understand your project structure, providing relevant suggestions based on your actual codebase</li>
        <li><strong>Offline Capability</strong> — When using Ollama, it works completely offline, ensuring privacy and functionality without internet access</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>Built with Node.js, TMM uses a modular architecture that makes it easy to add new AI providers and features. The CLI interface is built with modern terminal libraries for a smooth user experience. The project includes intelligent context gathering that analyzes your project structure to provide more relevant AI responses.</p>
      
      <h2>Open Source Philosophy</h2>
      <p>This project is fully open source because I believe developer tools should be transparent and community-driven. The codebase is designed to be extensible — other developers can easily add their own AI providers or customize the behavior to fit their workflows.</p>
      
      <h2>Future Plans</h2>
      <p>I'm planning to add more AI provider options, improve the context understanding capabilities, and add features like code generation directly into files and automated refactoring suggestions.</p>
    `,
  },
];

export const blogPosts = [
  {
    id: "vibe-coding",
    title: "Vibe Coding: Building Fast Without Losing the Plot",
    excerpt:
      "Why moving fast with AI-assisted tools doesn't have to mean sloppy architecture — and how I keep 'vibe coding' sessions grounded in real system design.",
    image: "https://i.pinimg.com/1200x/9c/84/b4/9c84b460a818284c3f6a740e810e270e.jpg",
    category: "Development",
    date: "2026-05-12",
    tags: ["AI", "Workflow", "React"],
    content: `
      <p>Vibe coding has become a term of art in the developer community — that flow state where you're shipping features rapidly with AI assistance, letting the code flow almost instinctively. But there's a tension between moving fast and maintaining solid architecture.</p>
      
      <h2>The Vibe Coding Trap</h2>
      <p>The danger is real: when you're in the zone with an AI assistant, it's easy to accumulate technical debt. Quick solutions pile up, abstractions get muddy, and before you know it, you've built a house of cards that works but nobody wants to touch.</p>
      
      <h2>My Guardrails</h2>
      <p>Here's how I keep vibe coding productive without sacrificing quality:</p>
      <ul>
        <li><strong>Time-box the vibe sessions</strong> — I'll spend 2-3 hours in rapid prototyping mode, then step back for a code review pass</li>
        <li><strong>Document architectural decisions</strong> — Even quick notes about why I chose a pattern help maintain coherence</li>
        <li><strong>Test the critical paths</strong> — I don't write comprehensive tests during vibe coding, but I always verify the core user flows</li>
        <li><strong>Refactor before committing</strong> — The final 20% of a vibe session is dedicated to cleaning up the mess</li>
      </ul>
      
      <h2>The Sweet Spot</h2>
      <p>When done right, vibe coding is incredibly powerful. You can prototype entire features in a day that would have taken a week before. The key is recognizing that speed and quality aren't mutually exclusive — they just require different modes of thinking, and the discipline to switch between them.</p>
      
      <p>The best developers I know aren't the ones who code fastest — they're the ones who know when to speed up and when to slow down. Vibe coding is just another tool in that toolkit.</p>
    `,
  },
  {
    id: "information-systems-career",
    title: "What an Information Systems Degree Actually Prepares You For",
    excerpt:
      "Information Systems sits between business and computer science — here's how that mix has shaped my path into full-stack development and AI engineering.",
    image: "https://i.pinimg.com/736x/76/55/87/765587e389328e851fb9b1a5528fec76.jpg",
    category: "Career",
    date: "2026-04-02",
    tags: ["Career", "University", "IS"],
    content: `
      <p>People often ask me what an Information Systems degree is actually good for. Is it CS lite? Business with some tech sprinkled in? The truth is, IS occupies a unique space that's become increasingly valuable in the age of AI and full-stack development.</p>
      
      <h2>The IS Sweet Spot</h2>
      <p>Information Systems sits at the intersection of three domains:</p>
      <ul>
        <li><strong>Technical competence</strong> — You learn to code, but you also learn system architecture, databases, and infrastructure</li>
        <li><strong>Business understanding</strong> — You study organizations, processes, and how technology creates value</li>
        <li><strong>Human factors</strong> — UX, change management, and how people actually interact with systems</li>
      </ul>
      
      <h2>Why This Matters Now</h2>
      <p>In a world where AI can write code, the pure technical skills are becoming commoditized. What's scarce is the ability to understand what to build, why it matters, and how it fits into a larger system. That's exactly what IS teaches.</p>
      
      <h2>My Path</h2>
      <p>My IS degree gave me a foundation that's served me well:</p>
      <ul>
        <li>I can talk to business stakeholders and translate their needs into technical requirements</li>
        <li>I understand that the best architecture is the one that solves the actual problem, not the most elegant one</li>
        <li>I'm comfortable thinking about the full stack — from database design to frontend UX</li>
        <li>I can evaluate AI tools not just by their technical capabilities, but by their business impact</li>
      </ul>
      
      <h2>The Bottom Line</h2>
      <p>Information Systems isn't for everyone. If you want to be a pure researcher or work on kernel development, go for CS. But if you want to build systems that people actually use, that solve real business problems, and that live at the intersection of technology and human need — IS is worth a serious look.</p>
    `,
  },
];
