import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate frontend developer with over 3 years of
                experience building engaging web applications. I specialize in
                React, Next.js, and modern frontend technologies that bring
                ideas to life.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Based in Port Harcourt, Nigeria, I've worked with clients
                globally to build responsive web applications that users love.
                I'm always exploring new frontend frameworks and design
                patterns.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe in writing clean, maintainable code and building
                applications that are fast, accessible, and performant across
                all devices.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="animate-in fade-in slide-in-from-right-8 duration-700 delay-100 hover:shadow-md hover:scale-105 transition-all ">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Frontend Development
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Building responsive web applications with React, Next.js,
                    and modern JavaScript frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-in fade-in slide-in-from-right-8 duration-700 delay-100 hover:shadow-md hover:scale-105 transition-all ">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-yellow-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Performance & Optimization
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Optimizing applications for speed, accessibility, and
                    optimal performance across all web browsers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
