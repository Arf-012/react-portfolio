import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "A landing page for a local business showcasing their products and services.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    demoUrl: "https://sukasukachicken.vercel.app/",
    githubUrl: "https://github.com/Arf-012/PENUS_TIM2_WebsiteUMKM_ITsDAY",
  },
  {
    id: 2,
    title: "Computer Based Test",
    description:
      "An interactive computer-based testing platform with a focus on clarity.",
    image: "/projects/project2.png",
    tags: ["Vue", "TailwindCSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/DevacctoRPL/Frontend-Computer-Based-Test",
  },
  {
    id: 3,
    title: "Shapemaker App",
    description:
      "An educational web app that helps users explore geometric shapes.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    demoUrl: "https://shapemaker.vercel.app/",
    githubUrl: "https://github.com/Arf-012/Shapemaker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development. Each project is a testament to my commitment to quality
          and user experience.
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
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

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

        <div className="mt-12 text-center">
            <a href="https://github.com/Arf-012" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
};
