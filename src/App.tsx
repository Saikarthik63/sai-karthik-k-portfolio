import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CoreDomains from './components/CoreDomains'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationCerts from './components/EducationCerts'
import Footer from './components/Footer'
import { MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-void">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CoreDomains />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationCerts />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
