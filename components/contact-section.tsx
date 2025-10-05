import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contacts">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">

          <Link href={"mailto:jiyunpark1216@gmail.com"}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-sm text-slate-600">Get in touch</p>
              </CardContent>
            </Card>
          </Link>

          <Link href={"https://github.com/sirunde/"}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
                <p className="text-sm text-slate-600">View my code</p>
              </CardContent>
            </Card>
          </Link>

          <Link href={"https://www.linkedin.com/in/jpark1216"}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
                <p className="text-sm text-slate-600">Connect with me</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
