import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        "Git",
        "Clerk",
        "Vercel",
        "Cloudinary",
        "CI/CD",
        "Responsive Design",
      ],
    },
    {
      category: "Libraries & APIs",
      items: [
        "Redux ToolKit",
        "Zustand",
        "REST APIs",
        "Styled Components",
        "Tanstack React Query",
        "Tanstack Router",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
