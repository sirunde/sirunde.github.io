"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Code, MessageSquare, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Projects", id: "projects", icon: Code },
  { name: "Skills", id: "skills", icon: MessageSquare },
  { name: "Contacts", id: "contacts", icon: Upload },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth"});
};
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-slate-900">Sirunde</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={()=>scrollToSection(item.id)}
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-100 rounded-md"
              >
                {item.name}
              </button>
            ))}
            <Button asChild variant="outline" size="sm">
              <Link href="https://github.com/sirunde" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-100 rounded-md"
                  onClick={() => {setMobileMenuOpen(false); scrollToSection(item.id)}}
                >
                  {item.name}
                </button>
              ))}
              <Link
                href="https://github.com/sirunde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-100 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
