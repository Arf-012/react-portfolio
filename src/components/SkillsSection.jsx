import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend Skills
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Typescript", category: "Frontend" },
  // Backend Skills
  { name: "Mysql", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  // Tools
  { name: "Git/Github", category: "Tools" },
  { name: "Vs Code", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Adobe Photoshop", category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
