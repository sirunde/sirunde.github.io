'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-blue-300 to-blue-500",
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "AWS Lambda", "REST APIs", "Serverless"],
    color: "from-green-300 to-green-500",
  },
  {
    title: "Languages",
    skills: ["Python", "C/C++", "Next.js", "Java"],
    color: "from-yellow-300 to-yellow-500",
  },
  {
    title: "Database & Cloud",
    skills: ["AWS DynamoDB", "AWS S3", "PostgreSQL", "Supabase"],
    color: "from-purple-300 to-purple-500",
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "Computer Vision", "Deep Learning", "Data Analysis", "OCR", "NumPy"],
    color: "from-orange-500 to-red-500",
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        <div className="relative w-full">
          <Carousel
            className="w-full mx-auto"
            opts={{
              align: "start",
              loop: true, // infinite scroll
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {skillCategories.map((category, index) => (
                <CarouselItem key={index} className="pl-1 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <div className="p-1 flex w-full">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                      <CardContent className="p-6 flex flex-col justify-between">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                          <div className="w-6 h-6 bg-white rounded opacity-80" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">{category.title}</h3>
                        <div className="space-y-2 mt-auto">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="text-sm text-slate-600 transition duration-100 bg-slate-100 hover:bg-slate-200 ease-in-out px-3 py-1 rounded-full inline-block mr-2 mb-2"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

    </section>
  )
}
