import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationCerts from './components/EducationCerts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationCerts />
      </main>
      <Footer />
    </div>
  )
}

export default App
