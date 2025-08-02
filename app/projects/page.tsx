import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Upload, Code, Database, Brain, FileText } from "lucide-react"
import Link from "next/link"

const allProjects = [
  {
    title: "Villion - Luxury Rentals",
    description:
      "A premium rental platform offering high-end cars, villas, and yachts in Los Angeles and Miami. Designed for those seeking a seamless luxury experience.",
    icon: FileText,
    href: "https://joinvillion.com",
    tags: ["Next.js", "Supabase", "Usaepay", "Vercel"],
    color: "from-teal-500 to-green-500",
    status: "Regular Updates",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A full-stack chat application with real-time messaging capabilities. Built with Next.js frontend and AWS DynamoDB for scalable data storage. Features include user authentication, message history, and responsive design.",
    icon: MessageSquare,
    href: "/chat",
    tags: ["Next.js", "AWS DynamoDB", "Real-time", "WebSocket", "React"],
    color: "from-green-500 to-emerald-500",
    status: "Live Demo",
  },
  {
    title: "LeetCode Algorithm Solutions",
    description:
      "Comprehensive collection of algorithm solutions with detailed explanations. Covers data structures, dynamic programming, graph algorithms, and more. Each solution includes time/space complexity analysis.",
    icon: Code,
    href: "/projects/leetcode",
    tags: ["Algorithms", "Data Structures", "C++", "Python", "Problem Solving"],
    color: "from-blue-500 to-cyan-500",
    status: "67+ Solved",
  },
  {
    title: "AWS S3 File Uploader",
    description:
      "Secure file upload system with drag-and-drop interface. Integrated with AWS S3 for reliable cloud storage, featuring file validation, progress tracking, and folder organization.",
    icon: Upload,
    href: "/file",
    tags: ["AWS S3", "File Upload", "React", "Cloud Storage", "Drag & Drop"],
    color: "from-purple-500 to-pink-500",
    status: "Production Ready",
  },
  {
    title: "Computer Vision & Deep Learning",
    description:
      "Machine learning projects using PyTorch for computer vision tasks. Includes image classification, object detection, and OCR systems with detailed implementation and analysis.",
    icon: Brain,
    href: "/projects/lc",
    tags: ["PyTorch", "Computer Vision", "Deep Learning", "OCR", "Image Processing"],
    color: "from-orange-500 to-red-500",
    status: "Research Project",
  },
  {
    title: "Data Analysis Projects",
    description:
      "Various data analysis and visualization projects using Python, NumPy, and Matplotlib. Includes statistical analysis, data cleaning, and insight generation from complex datasets.",
    icon: Database,
    href: "/projects",
    tags: ["Python", "NumPy", "Matplotlib", "Data Analysis", "Statistics"],
    color: "from-indigo-500 to-purple-500",
    status: "In Progress",
  },
  {
    title: "Technical Blog & Documentation",
    description:
      "Technical writing and documentation covering software development, algorithms, and best practices. Includes tutorials, code examples, and project breakdowns.",
    icon: FileText,
    href: "/projects",
    tags: ["Technical Writing", "Documentation", "Tutorials", "Markdown", "Education"],
    color: "from-teal-500 to-green-500",
    status: "Regular Updates",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my work spanning web development, machine learning, cloud architecture, and algorithm
            design. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {allProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                      {project.status}
                    </span>
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
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium transition duration-100 bg-slate-100 hover:bg-slate-200 ease-in-out  text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full hover:bg-slate-300 transition-colors">
                  <Link href={project.href}>
                    Explore Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Interested in Collaboration?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="https://github.com/sirunde" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/chat">Try Chat Application</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
