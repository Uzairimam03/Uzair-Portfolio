import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LMS SaaS App",
    description:
      "A full-stack AI-powered LMS SaaS with subscriptions, payments, and real-time voice tutoring.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "Supabase"],
    demoUrl: "https://saas-app-2aho.vercel.app/",
    githubUrl: "https://github.com/Uzairimam03/saas-app",
  },

  {
    id: 2,
    title: "School Management App",
    description:
      "A full-stack School Management System with student, teacher, attendance, and academic management.",
    image: "/projects/project4.png",
    tags: ["Expo", "Typescript", "Node.js"],
    demoUrl:
      "https://drive.google.com/drive/folders/1G4lDLoP905GCu7Z47o-GEfxYtq4Wj3C_?usp=sharing",
    githubUrl: "https://github.com/Uzairimam03/School-Mangement-App",
  },
  {
    id: 3,
    title: "Realtime Chat App",
    description:
      "A secure real-time chat application with seamless communication and live messaging.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Socket.IO"],
    demoUrl: "https://realtime-chat-app-ten-alpha.vercel.app/login",
    githubUrl: "https://github.com/Uzairimam03/Realtime_Chat_App",
  },
  {
    id: 4,
    title: "Movie App",
    description:
      "A fast, responsive movie app featuring real-time search and TMDB integration.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Appwrite"],
    demoUrl: "https://tmdb-movieapp-react.netlify.app/",
    githubUrl: "https://github.com/Uzairimam03/React-Movie-App",
  },
  {
    id: 5,
    title: "Notes App (Mobile)",
    description:
      "A simple notes app built with React Native. It allows users to create, read, update, and delete notes and store them into database.",
    image: "/projects/project5.png",
    tags: ["React-Native", "Typescript", "Appwrite"],
    demoUrl: "#",
    githubUrl: "https://github.com/Uzairimam03/RN_Notes_App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Uzairimam03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
