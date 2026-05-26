// ★ PROJECT DATA — Edit this file to add/update/remove projects.
// To add a new project: copy one of the objects below, change the values, and drop a screenshot in public/projects/

export const projects = [
  {
    id: "hydari-officers-club",
    name: "Hydari Officers Club",
    shortDescription:
      "A premium digital platform for an exclusive officers club — featuring event management, member directory, and banquet hall booking system.",
    fullDescription:
      "We built a comprehensive digital solution for the Hydari Officers Club, transforming their traditional operations into a seamless online experience. The platform includes event scheduling, member registration & directory, banquet hall booking with real-time availability, and an elegant admin dashboard for club management. Designed with a premium aesthetic befitting the club's prestigious reputation.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/projects/hydari-officers-club.png",
    demoLink: "https://hydari-officers-club-demo.vercel.app/",
    category: "Web Application",
  },
  {
    id: "warehouse-management",
    name: "Warehouse Management System (WMS)",
    shortDescription:
      "An intelligent warehouse management system with real-time inventory tracking, dashboard analytics, and automated stock management.",
    fullDescription:
      "A full-featured Warehouse Management System (WMS) designed to streamline inventory operations end-to-end. The dashboard provides real-time stock tracking, automated reorder alerts, shipment scheduling, multi-warehouse support, and detailed analytics. The system reduced manual inventory errors by over 90% and improved order fulfillment speed significantly for the client.",
    techStack: ["React", "Node.js", "PostgreSQL", "REST API", "Chart.js"],
    image: "/projects/warehouse-management.png",
    demoLink: "https://rrk-wms-demo.vercel.app/",
    category: "Enterprise Software",
  },
  {
    id: "ai-college-placement",
    name: "AI College Placement Prep",
    shortDescription:
      "An AI-powered placement preparation platform with mock interviews, resume builder, and aptitude test engine.",
    fullDescription:
      "An intelligent platform that helps college students prepare for campus placements using AI. Features include AI-driven mock interview simulations with real-time feedback, an automated resume builder, a comprehensive aptitude & coding test engine, personalized study plans, and progress tracking dashboards. The platform leverages cutting-edge AI models to provide realistic interview practice and actionable improvement suggestions.",
    techStack: ["React", "Python", "OpenAI API", "FastAPI", "MongoDB"],
    image: "/projects/ai-college-placement.png",
    demoLink: "#",
    noLinkReason: "Demo available soon — contact us for a live walkthrough.",
    category: "AI / ML",
  },
  {
    id: "mmr-trainer",
    name: "Fit Future with MMR",
    shortDescription:
      "A premium fitness coaching portfolio for Mettu Manohar Reddy — featuring elite training programs, transformation showcases, and client booking.",
    fullDescription:
      "A modern, conversion-optimized fitness coaching website built for Mettu Manohar Reddy (Fit Future). The site features a bold hero section, elite training program showcases, dramatic body transformation galleries, integrated booking and consultation forms, WhatsApp integration for quick inquiries, and a fully responsive design. Built to establish a powerful personal brand in the competitive online fitness coaching space and convert visitors into paying clients.",
    techStack: ["React", "Vite", "CSS Animations", "Responsive Design"],
    image: "/projects/mmr-trainer.png",
    demoLink: "https://www.fitfuturewithmmr.com/",
    category: "Portfolio / Branding",
  },
  {
    id: "water-tanker",
    name: "AquaBook — Water Tanker Booking",
    shortDescription:
      "A real-time water tanker booking system with live map tracking, delivery scheduling, and fleet management dashboard.",
    fullDescription:
      "AquaBook is a comprehensive water tanker delivery management solution. The platform includes a customer-facing booking interface with real-time tanker tracking via interactive Leaflet maps, a driver app for route optimization, and an admin dashboard for fleet management and analytics. Features automated scheduling, delivery history, and a clean modern UI with the Sora & DM Sans typography system.",
    techStack: ["React", "Vite", "Leaflet Maps", "Node.js", "Firebase"],
    image: "/projects/water-tanker.png",
    demoLink: "https://water-tanker-demo.vercel.app/",
    category: "Web Application",
  },
  {
    id: "house-of-midas",
    name: "House of Midas",
    shortDescription:
      "A luxury jewelry e-commerce website with premium product showcase, shopping cart, and secure payment integration.",
    fullDescription:
      "An exquisite e-commerce platform for House of Midas, a luxury jewelry brand. The website features a stunning product showcase with high-resolution imagery, 360° product views, advanced filtering and search, wishlist functionality, secure checkout with multiple payment options, and an elegant admin panel for inventory management. The design emphasizes luxury and sophistication to match the brand's premium positioning.",
    techStack: ["React", "Node.js", "Stripe", "MongoDB", "Cloudinary"],
    image: "/projects/house-of-midas.png",
    demoLink: "#",
    noLinkReason: "Demo available soon — contact us for a live walkthrough.",
    category: "E-Commerce",
  },
  {
    id: "vtd-fitness",
    name: "VTD Fitness",
    shortDescription:
      "A comprehensive gym & fitness app similar to Cult.fit — featuring workout plans, class booking, and fitness tracking.",
    fullDescription:
      "A feature-rich fitness application inspired by platforms like Cult.fit. The app includes personalized workout plans with video demonstrations, live & recorded class booking, fitness progress tracking with detailed charts, diet/nutrition planner, gym membership management, and social features for community engagement. Designed to provide a complete fitness ecosystem for both gym owners and members.",
    techStack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS S3",
    ],
    image: "/projects/vtd-fitness.png",
    demoLink: "#",
    noLinkReason: "Demo available soon — contact us for a live walkthrough.",
    category: "Mobile Application",
  },
];

// Helper to get all unique categories
export const getCategories = () => {
  const cats = [...new Set(projects.map((p) => p.category))];
  return ["All", ...cats];
};

// Helper to find a project by ID
export const getProjectById = (id) => projects.find((p) => p.id === id);

// Helper to get next/previous project
export const getAdjacentProjects = (id) => {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};
