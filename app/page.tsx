import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <ProjectsSection/>
      <SkillsSection />
      <ContactSection />
    </main>
  )
}