import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { Github } from "./icons/github";
import { LinkedIn } from "./icons/LinkedIn";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-2 md:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Ezeugo Obieze
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Frontend Developer
          </h2>

          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            I build responsive web applications with modern technologies. With
            3+ years of experience, I'm passionate about clean code, performance
            optimization, and creating seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button size="lg" asChild>
              <Link href="#contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-in fade-in duration-1000 delay-700">
            <Link
              href="https://github.com/felistus"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors hover:scale-125 duration-300"
              aria-label="GitHub Profile"
              target="_blank"
            >
              <Github className="h-6 w-6 " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ezeugo-felistus-obieze"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors hover:scale-125 duration-300"
              aria-label="LinkedIn Profile"
              target="_blank"
            >
              <LinkedIn className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:ezeugoobieze@gmail.com"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors hover:scale-125 duration-300"
              aria-label="Email Contact"
              target="_blank"
            >
              <Mail className="h-6 w-6" color="white" />
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
