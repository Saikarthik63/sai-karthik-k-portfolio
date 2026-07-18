export interface SocialLinks {
  github: string
  instagram: string
  linkedin: string
  email: string
  phone: string
  website: string
}

export interface Profile {
  name: string
  shortName: string
  tagline: string
  role: string
  specialization: string
  location: string
  status: string
  bio: string
  social: SocialLinks
}

export interface SpecItem {
  label: string
  value: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  role: string
  year: string
  link: string
  highlight: boolean
}

export interface Education {
  institution: string
  credential: string
  detail: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface PortfolioData {
  profile: Profile
  specSheet: SpecItem[]
  skills: { categories: SkillCategory[] }
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
}
