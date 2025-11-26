"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "LabTracka - Health Test Booking Platform",
      description:
        "A comprehensive healthcare platform connecting patients with accredited laboratories for convenient medical test booking, home sample collection, and instant online results with 24/7 service availability.",
      image:
        "https://res.cloudinary.com/felistus/image/upload/v1762607206/portfolio/labtracka.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Payment Integration",
      ],
      liveUrl: "https://labtracka.com",
      githubUrl: "https://labtracka.com",
    },
    {
      title: "OgaTicket - Event Ticketing Platform",
      description:
        "A full-featured event management and ticketing solution enabling event organizers to create, sell, and manage events with integrated payment processing and real-time ticket sales tracking.",
      image:
        "https://res.cloudinary.com/felistus/image/upload/v1762607206/portfolio/ogaticket.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Tanstack Query",
      ],
      liveUrl: "https://ogaticket.com",
      githubUrl: "https://ogaticket.com",
    },
    {
      title: "MyBetOracle - Sports Predictions Platform",
      description:
        "An AI-powered sports prediction platform providing accurate football match predictions, real-time analytics, and betting insights with expert analysis and global league coverage.",
      image:
        "https://res.cloudinary.com/felistus/image/upload/v1762607206/portfolio/mybetoracle.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Real-time Analytics",
      ],
      liveUrl: "https://www.mybetoracle.com",
      githubUrl: "https://www.mybetoracle.com",
    },
    {
      title: "I Love Real Estates ",
      description:
        "A real-estate platform offering property listings for rent, sale and lease, empowering users to browse, connect and transact across regions with a streamlined online experience.",
      image:
        "https://res.cloudinary.com/felistus/image/upload/v1763635281/portfolio/iloverealestate.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Progressive Web App / Mobile Friendly",
      ],
      liveUrl: "https://www.iloverealestates.com/en-new/",
      githubUrl: "https://www.iloverealestates.com/en-new/",
    },
    {
      title: "Q2WIN",
      description:
        "A Nigerian play-to-earn gaming platform offering multiple lottery-style and prediction-based games via USSD, SMS, and Web, giving users daily chances to win cash prizes.",
      image:
        "https://res.cloudinary.com/felistus/image/upload/v1763635280/portfolio/q2win.png",
      technologies: [
        "Web (responsive)",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      liveUrl: "https://www.q2win.com.ng",
      githubUrl: "https://www.q2win.com.ng",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 ${
                  index === 0
                    ? "delay-200"
                    : index === 1
                    ? "delay-400"
                    : "delay-600"
                }`}
                style={{ animationFillMode: "both" }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/placeholder.svg?height=200&width=400";
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    size="sm"
                    asChild
                    className="hover:shadow-md transition-shadow"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
