import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Upload, Code, Database, Car } from "lucide-react"
import Link from "next/link"

const projects = [
    {
    title: "Villion - Luxury Rentals",
    description:
      "A premium rental platform offering high-end cars, villas, and yachts in Los Angeles and Miami. Designed for those seeking a seamless luxury experience.",
    icon: Car,
    href: "https://villionyachts.com",
    tags: ["Next.js", "Supabase", "Usaepay", "Vercel"],
    color: "from-teal-500 to-green-500",
    status: "Regular Updates",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A full-stack chat application with real-time messaging, built with Next.js and AWS DynamoDB for scalable data storage.",
    icon: MessageSquare,
    href: "/chat",
    tags: ["Next.js", "AWS DynamoDB", "Real-time", "WebSocket"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AWS File Uploader",
    description:
      "Secure file upload system with drag-and-drop interface, integrated with AWS S3 for reliable cloud storage.",
    icon: Upload,
    href: "/file",
    tags: ["AWS S3", "File Upload", "React", "Cloud Storage"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Computer vision and deep learning projects using PyTorch, including image classification and object detection systems.",
    icon: Database,
    href: "/projects/lc",
    tags: ["PyTorch", "Computer Vision", "Deep Learning", "OCR"],
    color: "from-orange-500 to-red-500",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore my latest work in web development, machine learning, and cloud architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Link href={project.href}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium transition duration-100 bg-slate-100 hover:bg-slate-200 ease-in-out  text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full group-hover:bg-slate-50 bg-transparent">
                  <Link href={project.href}>
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
