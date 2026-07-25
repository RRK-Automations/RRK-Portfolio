// ★ PROJECT DATA — Edit this file to add/update/remove projects.
// To add a new project: copy one of the objects below, change the values, and drop a screenshot in public/projects/

export const projects = [
  {
    id: "warehouse-management",
    name: "Warehouse Management System (WMS)",
    shortDescription:
      "An enterprise-grade warehouse and inventory management platform with real-time tracking, dispatch automation, and ERP integration.",
    fullDescription:
      "A full-featured Warehouse Management System (WMS) integrated within the RRK ERP ecosystem. The platform provides real-time inventory tracking across multiple warehouses, automated dispatch management workflows, and secure ERP integration for end-to-end supply chain visibility. Key capabilities include stock level monitoring, automated reorder alerts, shipment scheduling, and detailed operational analytics. Designed for logistics and distribution businesses looking to reduce manual errors, accelerate order fulfillment, and gain complete control over their warehouse operations.",
    techStack: ["React", "Node.js", "PostgreSQL", "REST API", "Chart.js"],
    image: "/projects/warehouse-management.png",
    demoLink: "https://rrk-wms-demo.vercel.app/",
    category: "Enterprise Software",
    featuredBadge: "Featured",
  },
  {
    id: "stay-karo-lms",
    name: "StayKaro LMS",
    shortDescription:
      "A full-featured Learning Management System with faculty dashboards, course management, AI mock interviews, and real-time analytics.",
    fullDescription:
      "We developed StayKaro LMS, a comprehensive learning management platform designed for educational institutions. The system supports three user roles — admin, faculty, and student — each with tailored dashboards and capabilities. Faculty can create and manage courses, assignments, tests, and live classes; track attendance across batches; and view detailed analytics on student performance. Students access course materials, submit assignments, take tests, track progress, and participate in AI-powered mock interview simulations with real-time feedback. The admin panel provides institution-wide oversight with user management, bulk enrollment via nominal roll import, certificate generation, billing, support ticket management, and a broadcast system for announcements. Built on Supabase for authentication and data storage, the platform handles the complete academic workflow from enrollment to certification.",
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Node.js"],
    image: "/projects/stay-karo-lms.png",
    demoLink: "https://staykarolms-six.vercel.app/",
    category: "Enterprise Software",
    featuredBadge: "Enterprise",
  },
  {
    id: "ai-college-placement",
    name: "AI College Placement Prep",
    shortDescription:
      "An AI-powered placement preparation platform with mock interviews, resume builder, and aptitude test engine.",
    fullDescription:
      "An intelligent platform that helps college students prepare for campus placements using AI. Features include AI-driven mock interview simulations with real-time feedback, an automated resume builder, a comprehensive aptitude and coding test engine, personalized study plans, and progress tracking dashboards. The platform leverages cutting-edge AI models to provide realistic interview practice and actionable improvement suggestions — helping students build confidence and improve their chances of landing placements.",
    techStack: ["React", "Python", "OpenAI API", "FastAPI", "MongoDB"],
    image: "/projects/ai-college-placement.png",
    demoLink: "#",
    noLinkReason: "Demo available soon — contact us for a live walkthrough.",
    category: "AI / ML",
    featuredBadge: "AI Powered",
  },
  {
    id: "soulmate",
    name: "SoulMate",
    shortDescription:
      "A luxury footwear e-commerce platform with premium product showcases, category-based browsing, and made-to-order workflow.",
    fullDescription:
      "A premium direct-to-consumer e-commerce platform built for SoulMate, a luxury women's footwear brand inspired by Parisian design and Italian craftsmanship. The platform showcases six signature shoe silhouettes with rich product detail pages, category-based filtering across Heels, Flats, Boots, Sandals, and Sneakers, and a made-to-order model that emphasizes sustainability. Beyond the shop, the site includes brand storytelling pages — the brand story, lookbook, and craft & ethics section — plus a comprehensive support hub with size guide, shipping & returns, and care guide. The editorial design lets product photography drive the experience while maintaining a luxury brand feel throughout. Built with Next.js for performance, SEO, and seamless browsing.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/soulmate.png",
    demoLink: "https://soulmate-liart.vercel.app/",
    category: "E-Commerce",
    featuredBadge: "Premium",
  },
  {
    id: "house-of-midas",
    name: "House of Midas",
    shortDescription:
      "A luxury high-jewelry brand platform with premium product showcase, heritage storytelling, and inquiry-based private sales.",
    fullDescription:
      "A bespoke luxury brand platform built for House of Midas, a high-jewelry maison inspired by centuries-old craftsmanship and celestial design. The website serves as the brand's complete digital presence, featuring an immersive product gallery showcasing collections of diamond and gold rings priced from £45,000, heritage storytelling that traces the atelier's legacy since 1920, an artisan process section detailing the handcrafting journey from sketch to finished piece, and a private inquiry system for exclusive viewings — replacing traditional cart-based checkout with a concierge-led sales experience. Customer testimonials, a journal or editorial section, and full brand narrative pages complete the experience. Built with React and framer-motion for fluid animations, the design emphasizes editorial elegance — letting product imagery and cinematic typography drive the brand's luxury positioning.",
    techStack: ["React", "Tailwind CSS", "framer-motion", "Vercel"],
    image: "/projects/house-of-midas.png",
    demoLink: "https://house-of-midas.vercel.app/",
    category: "E-Commerce",
  },
  {
    id: "hydari-officers-club",
    name: "Hydari Officers Club",
    shortDescription:
      "A premium digital platform for an exclusive officers club — featuring event management, member portal, and facility booking.",
    fullDescription:
      "A comprehensive digital solution built for the Hydari Officers Club, a premier recreational and social institution for officers and their families. The platform serves as the club's complete online presence, featuring member registration and portal access, event scheduling and listings, facility showcase with digital booking infrastructure, gallery, and heritage storytelling sections. The site reflects the club's 90+ year legacy with a premium design befitting its prestigious reputation. Members can access exclusive content, explore amenities, and stay connected with club activities — all from a single unified platform.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/projects/hydari-officers-club.png",
    demoLink: "https://hydari-officers-club-demo.vercel.app/",
    category: "Web Application",
  },
  {
    id: "safe-snack",
    name: "SafeSnack",
    shortDescription:
      "A specialty online ordering platform for sugar-free, diabetic-friendly, and keto snacks with dietary filtering and account management.",
    fullDescription:
      "A curated online ordering platform built for SafeSnack, a Hyderabad-based brand focused on sugar-free, diabetic-friendly, keto, and vegan snacks. The platform features a full product catalog with dietary tag-based filtering (diabetic, keto, vegan, sugar-free), a bundled products section, full-text search, user accounts with order history and wishlists, and a complete shopping cart and checkout flow. The homepage emphasizes ingredient transparency with a side-by-side comparison of what is avoided versus what is included — helping health-conscious customers make informed choices. Built with a clean, accessible design that prioritizes product clarity and ease of navigation.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/safe-snack.png",
    demoLink: "https://safesnack-v1.vercel.app/",
    category: "Web Application",
    featuredBadge: "Production",
  },
  {
    id: "water-tanker",
    name: "AquaBook — Water Tanker Booking",
    shortDescription:
      "A real-time water tanker booking system with live map tracking, delivery scheduling, and fleet management dashboard.",
    fullDescription:
      "AquaBook is a comprehensive water tanker delivery management solution built to streamline the water supply chain. The platform includes a customer-facing booking interface with real-time tanker tracking via interactive maps, driver-side route optimization, and an admin dashboard for fleet management and analytics. Features include automated scheduling, delivery history, and a clean modern UI designed for ease of use across all user types. The system helps fleet operators reduce dispatch time and improve customer satisfaction with transparent delivery tracking.",
    techStack: ["React", "Vite", "Leaflet Maps", "Node.js", "Firebase"],
    image: "/projects/water-tanker.png",
    demoLink: "https://water-tanker-demo.vercel.app/",
    category: "Mobile Application",
  },
  {
    id: "vtd-fitness",
    name: "VTD Fitness",
    shortDescription:
      "A comprehensive gym and fitness app with workout plans, class booking, progress tracking, and membership management.",
    fullDescription:
      "A feature-rich fitness application built for gym owners and fitness enthusiasts, inspired by platforms like Cult.fit. The app includes personalized workout plans with video demonstrations, live and recorded class booking, fitness progress tracking with detailed charts, a diet and nutrition planner, gym membership management, and social features for community engagement. Designed to provide a complete fitness ecosystem — helping gyms manage operations while giving members a seamless wellness experience across web and mobile.",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    image: "/projects/vtd-fitness.png",
    demoLink: "#",
    noLinkReason: "Demo available soon — contact us for a live walkthrough.",
    category: "Mobile Application",
  },
  {
    id: "mmr-trainer",
    name: "Fit Future with MMR",
    shortDescription:
      "A premium fitness coaching portfolio for Mettu Manohar Reddy — featuring training programs, transformation showcases, and online booking.",
    fullDescription:
      "A modern, conversion-optimized fitness coaching website built for Mettu Manohar Reddy, an online fitness coach and strength & conditioning specialist. The site features program showcases with transparent pricing (monthly to annual plans), dramatic body transformation galleries, a certifications section, client testimonials, WhatsApp integration for instant inquiries, and a fully responsive design. Built to establish a powerful personal brand in the competitive online fitness coaching space and convert visitors into paying clients through strategic design and clear calls to action.",
    techStack: ["React", "Vite", "CSS Animations", "Responsive Design"],
    image: "/projects/mmr-trainer.png",
    demoLink: "https://www.fitfuturewithmmr.com/",
    category: "Portfolio / Branding",
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
