'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden h-screen" id="hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
      
      {/* Use animate-float-random class */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-random" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-random animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jiyun Park
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer passionate about creating innovative solutions with{" "}
            <span className="font-semibold text-slate-900">Next.js</span>,{" "}
            <span className="font-semibold text-slate-900">AWS</span>, and{" "}
            <span className="font-semibold text-slate-900">Machine Learning</span>
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            I build scalable web applications, solve complex algorithms, and explore the intersection of technology and
            innovation. Currently working on projects involving computer vision, data analysis, and cloud architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/sirunde" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-4 h-4" />
                GitHub Profile
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">7+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">3+</div>
              <div className="text-slate-600">Years Coding Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-slate-600">LeetCode Problems</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatRandom {
          0% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          25% {
            transform: translate(10px, -10px);
            opacity: 0.4;
          }
          50% {
            transform: translate(-10px, 10px);
            opacity: 0.2;
          }
          75% {
            transform: translate(15px, 15px);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
        }

        .animate-float-random {
          animation: floatRandom 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}