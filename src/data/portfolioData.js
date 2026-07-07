export const portfolioData = {
  name: "Gautam Dalal",
  title: "Full Stack Engineer",
  subtitle: "Building high-performance web, mobile, and browser extension solutions.",
  avatar: "images/avatar.png",
  resumeUrl: "GautamDalalResume.pdf",
  
  socials: {
    linkedin: "https://linkedin.com/in/gautamdalal82",
    github: "https://github.com/GD011",
    email: "mailto:dalalgautam09@gmail.com"
  },
  
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Completed Projects", value: "10+" },
    { label: "Happy Clients", value: "5+" }
  ],
  
  about: {
    heading: "Passionate about building clean code, clean interfaces, and scalable architectures.",
    paragraph1: "I am Gautam Dalal, a software engineer specializing in JavaScript/TypeScript and Python ecosystems. With a strong background in React, React Native, Next.js, and Node.js, I build scalable web apps, cross-platform mobile apps, and browser extensions.",
    paragraph2: "Currently, I work as a Junior Developer at Cyber Infrastructure, where I collaborate with design and QA teams to build robust, responsive frontend layouts. I am passionate about optimizing interaction response times and developing clean code solutions."
  },
  
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["JavaScript", "Python", "React", "React Native", "Next.js", "Node.js", "FastAPI"]
    },
    {
      category: "Libraries & Dev Tools",
      items: ["Fabric.js", "Tailwind CSS", "Bootstrap", "Git", "Postman", "Jira", "Figma", "Cursor", "Claude Code"]
    }
  ],
  
  experience: [
    {
      company: "Cyber Infrastructure",
      role: "Junior Developer",
      period: "April 2024 - Present",
      description: [
        "Developed and maintained web and mobile applications using React.js, React Native, and modern JavaScript, contributing to scalable and efficient product development.",
        "Partnered with designers, QA engineers, and senior developers to deliver robust, production-ready applications.",
        "Optimized UI performance and implemented responsive design techniques, improving usability and cross-platform consistency.",
        "Participated in peer code reviews and debugging processes, ensuring high-quality code standards and reducing defects."
      ]
    },
    {
      company: "Saturn Production",
      role: "Freelance Web & Mobile Developer",
      period: "July 2021 - February 2024",
      description: [
        "Delivered scalable web and mobile applications using HTML, CSS, JavaScript, React.js, and React Native, meeting diverse client requirements and improving overall client satisfaction.",
        "Collaborated with cross-functional teams, including designers and backend developers, to build high-quality, user-centric products.",
        "Implemented responsive and mobile-first design principles, ensuring seamless user experience across multiple devices and screen sizes.",
        "Conducted code reviews and applied best coding practices, enhancing code quality, maintainability, and performance."
      ]
    }
  ],
  
  projects: [
    {
      id: "avpes-school-management",
      title: "AVPES - Multi-School WordPress Management Portal",
      category: "WordPress",
      shortDescription: "A complete multi-institution educational services portal managing registrations, student/staff portals, and digital payment gateways.",
      description: "AVPES (AVP Educational Services) is an enterprise-grade school management platform built on WordPress to coordinate administrative systems for Adarsh Vidhyapeeth and AVP Global School. The portal integrates role-based student and staff login centers, multi-school registration forms, automated fee collection systems, and dynamic query handlers. Constructed utilizing a highly responsive child theme design, custom template hooks, and direct database queries.",
      image: "images/project5.png",
      tech: ["WordPress", "PHP", "MySQL", "Elementor", "OceanWP", "Razorpay / Stripe", "School Management Pro"],
      liveUrl: "http://avpes.com",
      features: [
        "Separate student admission portals and enquiry systems for Adarsh Vidhyapeeth and AVP Global School.",
        "Staff login panel (/wp-admin/) and customized student dashboards with session state filters.",
        "Direct online fee collection integrated securely with local checkout modules (Razorpay/Paystack/Stripe).",
        "Fully modular design crafted with Elementor canvas models and high-performance OceanWP styles."
      ],
      challengeSolved: "Integrating multiple schools under a unified WordPress database while routing registration data and fee collections to independent departments was a major challenge. I addressed this by configuring separate school namespaces inside the School Management database tables, writing custom PHP templates to dynamically load context-specific admission forms, and developing transaction filter overrides to route client checkout payloads based on the selected institution."
    },
    {
      id: "tubespanner-browser-extension",
      title: "TubeSpanner - YouTube Productivity Extension",
      category: "Extension",
      shortDescription: "A comprehensive browser extension built with React and Fabric.js, helping YouTube creators plan, write, and optimize videos directly inside YouTube Studio.",
      description: "Engineered a TubeSpanner Browser Extension to enhance video browsing by enabling quick thumbnail customization and content interaction directly within the browser. Developed the extension using JavaScript, HTML, and CSS, integrating with browser APIs to manipulate DOM elements and provide seamless in-page editing features. Implemented performance optimizations and efficient event handling, achieving up to 25-30% faster interaction response time and improved runtime efficiency.",
      image: "images/project6.png",
      tech: ["JavaScript", "HTML5 & CSS3", "Browser Extension API", "React", "webpack", "Fabric.js"],
      liveUrl: "https://www.tubespanner.com",
      features: [
        "Engineered to enhance video browsing by enabling quick thumbnail customization and content interaction directly within the browser.",
        "Developed using JavaScript, HTML, and CSS, integrating with browser APIs to manipulate DOM elements.",
        "Implemented performance optimizations achieving up to 25–30% faster interaction response time.",
        "Designed an intuitive and lightweight UI ensuring minimal resource consumption."
      ],
      challengeSolved: "Injecting responsive overlay components and custom toolbar icons into the dynamically rendered YouTube Studio DOM without creating page layout shifts or conflicting with YouTube's single-page router (SPF) was a significant engineering hurdle. I resolved this by designing a robust DOM observer interface using mutation listeners, wrapping components in Shadow DOM namespaces to isolate styling, and routing extension messages asynchronously via background script service workers."
    },
    {
      id: "tubespanner-thumbnail-editor",
      title: "TubeSpanner - HTML5 Canvas Thumbnail Editor",
      category: "Fullstack",
      shortDescription: "An interactive graphic design web tool built using React and Fabric.js, allowing creators to design thumbnails with layered vector canvas engines.",
      description: "Engineered a web-based application, TubeSpanner Thumbnail Editor, to streamline thumbnail creation for digital content platforms. Developed a responsive, component-based front-end using React.js, implementing drag-and-drop editing, real-time rendering, and image/text customization features. Optimized application performance through efficient state management and rendering techniques, achieving up to 30% faster load and interaction times.",
      image: "images/project7.png",
      tech: ["React", "Fabric.js", "HTML5 Canvas", "JavaScript", "State Management", "UI/UX Design"],
      liveUrl: "https://www.tubespanner.com",
      features: [
        "Web-based application to streamline thumbnail creation for digital content platforms.",
        "Responsive, component-based front-end implementing drag-and-drop editing and real-time rendering.",
        "Optimized performance through state management, achieving up to 30% faster load and interaction times.",
        "Built export functionality and applied UI/UX best practices to deliver a scalable, user-friendly interface."
      ],
      challengeSolved: "Handling high-resolution image assets on a single browser canvas thread led to layout lag, especially when applying real-time filters or resizing layered vector objects. I resolved this by establishing a multi-layered canvas architecture, separating the rendering viewport from the export engine, utilizing Web Workers to calculate heavy pixel-level filter matrices, and using offscreen canvas buffers for seamless background processes."
    },
    {
      id: "the-world-travel-guy",
      title: "The World Travel Guy - Travel Blog & Guides",
      category: "WordPress",
      shortDescription: "A high-traffic, media-rich travel blog featuring destination guides, customized layout templates, and affiliate integrations.",
      description: "The World Travel Guy is a professional travel blog built on WordPress, utilizing the Soledad theme framework. The site features extensive destination travel guides, custom page layouts, custom fonts, automated RSS feeds, Google Tag Manager event tracking, GetYourGuide affiliate widgets, and optimized programmatic ad placements powered by Mediavine. Engineered to sustain high concurrent traffic and achieve excellent Core Web Vitals scores.",
      image: "images/project8.png",
      tech: ["WordPress", "PHP", "MySQL", "Soledad Theme", "Mediavine API", "Google Analytics", "PageSpeed Optimization"],
      liveUrl: "https://theworldtravelguy.com",
      features: [
        "Programmatic ad injection and layout monetization powered by Mediavine scripts.",
        "Interactive affiliate travel widgets (GetYourGuide) dynamically loaded based on user location.",
        "Advanced media delivery pipeline featuring automated image compression and responsive size attributes.",
        "Google Tag Manager integration to track user click journeys and affiliate redirections."
      ],
      challengeSolved: "Optimizing page speed and cumulative layout shift (CLS) under heavy programmatic advertising banners and high-resolution travel images was a critical constraint. I resolved this by applying asynchronous script loading for ad partners, configuring explicit aspect ratio boxes for dynamic script placeholders, lazy-loading all media using custom browser attributes, and employing global CDN caching for static WordPress content."
    },
    {
      id: "period-beer-app",
      title: "Period Bear - Wellness & Cycle Tracker",
      category: "Mobile",
      shortDescription: "A cross-platform mobile application for menstrual cycle tracking and health awareness developed with React Native.",
      description: "Engineered Period Bear, a cross-platform mobile application for menstrual cycle tracking and health awareness, aimed at improving user engagement and accessibility to essential health insights. Developed the app using React Native, implementing features such as cycle tracking, reminders/notifications, and educational content for user awareness. Integrated efficient state management and optimized component rendering, achieving up to 25–35% improved app performance and smoother navigation across devices.",
      image: "images/project9.png",
      tech: ["React Native", "JavaScript", "SQLite", "Reminders/Notifications", "State Management", "Google Play Store"],
      liveUrl: "https://google.com",
      features: [
        "Engineered for menstrual cycle tracking and health awareness, improving accessibility to essential health insights.",
        "Developed cycle tracking, reminders/notifications, and educational content.",
        "Achieved up to 25–35% improved app performance and smoother navigation across devices.",
        "Successfully deployed the application on the Google Play Store ensuring production readiness."
      ],
      challengeSolved: "Securing user health information offline without using external cloud servers was a key requirement. I addressed this by establishing local client-side AES-256 database encryption on the device SQLite instance, running all cycle prediction algorithms on local threads, and disabling telemetry libraries."
    },
    {
      id: "clinpex-medical-coding-frontend",
      title: "Clinpex - AI Medical Coding Frontend",
      category: "Frontend",
      shortDescription: "A highly secure, 21 CFR Part 11 compliant frontend interface for medical terminology and drug clinical trial coding.",
      description: "Clinpex Frontend is a professional, high-security clinical terminology and drug coding dashboard interface built with React and TypeScript. Tailored for pharmaceutical research and clinical trials, the frontend handles complex search queries across MedDRA and WHODrug dictionaries, supports manual/auto/AI-assisted workflow transitions, and renders synonym/Do Not Code lists. Designed to satisfy strict 21 CFR Part 11 compliance standards, including full electronic records and audit trail transparency.",
      image: "images/project10.png",
      tech: ["React", "TypeScript", "REST API", "Tailwind CSS", "Vite", "Jest / RTL"],
      liveUrl: "https://google.com",
      features: [
        "Configurable coding flows displaying Synonym lists, Do Not Code filters, and Requires Review workflows.",
        "Advanced search panels with high-performance filters supporting MedDRA LLT, ATC level 5, and WHODrug C3 classifications.",
        "Compliance structures facilitating read-only audit log viewer screens and Single Sign-On (SSO) profile states.",
        "Interactive dictionary upversioning manager indicating impact analysis reports."
      ],
      challengeSolved: "Rendering massive hierarchies of terminology trees (MedDRA) and drug dictionaries on the client side caused layout blocks and high memory consumption. I resolved this by designing a virtualized tree-grid view using windowed rendering arrays, debouncing API autocomplete filters to prevent query storms, and caching local dictionaries in IndexedDB to support immediate search operations."
    },
    {
      id: "wordpress-lms-platform",
      title: "eLearnX - WordPress LMS Platform",
      category: "WordPress",
      shortDescription: "A complete custom-designed Learning Management System built on WordPress supporting student courses, quizzes, and subscriptions (Currently offline).",
      description: "eLearnX is a robust Learning Management System (LMS) designed for digital learning academies. Built on WordPress using a customized LearnDash framework, it features full-featured course creation panels, student quiz builders, certificate generation modules, and member subscription packages. Optimized with object caching and database indexing, the site supported thousands of concurrent students before going offline.",
      image: "images/project11.png",
      tech: ["WordPress", "PHP", "MySQL", "LearnDash LMS", "WooCommerce", "Elementor Pro", "Redis Cache"],
      features: [
        "Dynamic course curriculum builder with interactive audio/video lesson models.",
        "Automated quiz grading engine supporting multiple question types, time limits, and custom certificate PDFs.",
        "WooCommerce subscriptions and membership portal integrated with checkout payment gateways.",
        "Student gradebooks, progress trackers, and direct messaging portals to reach instructors."
      ],
      challengeSolved: "Configuring high-concurrency database queries for student progress trackers and real-time quiz evaluations placed severe strains on standard WordPress database structures. I resolved this by implementing Redis object caching to store transient session state, writing custom SQL queries to bypass heavy WP_Query operations, and lazy-loading media files onto CDN edge locations."
    }
  ]
};
