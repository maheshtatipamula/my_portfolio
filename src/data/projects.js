// Sample project data
// Replace with your actual projects

export const allProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
    technologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Stripe API",
      "React",
      "Node",
      "tailwind css",
    ],
    github: "https://github.com/yourusername/ecommerce-website",
    demo: "https://ecommerce-demo.example.com",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data for any location using the OpenWeather API.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-app.example.com",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks with features like drag-and-drop, categories, and due dates.",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager.example.com",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills (the one you're looking at right now).",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Movie Database App",
    description:
      "An application for browsing movies and TV shows, with features like search, filtering, and user reviews.An application for browsing movies and TV shows, with features like search, filtering, and user reviews.An application for browsing movies and TV shows, with features like search, filtering, and user reviews.",
    technologies: ["React", "Redux", "TMDB API", "Styled Components"],
    github: "https://github.com/yourusername/movie-database",
    demo: "https://movie-db.example.com",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description:
      "A web application for finding recipes based on ingredients you have, dietary restrictions, and cuisine preferences.",
    technologies: ["JavaScript", "HTML", "CSS", "Spoonacular API"],
    github: "https://github.com/yourusername/recipe-finder",
    demo: "https://recipe-finder.example.com",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

// Featured projects (subset of all projects)
export const featuredProjects = allProjects.slice(0, 3);
