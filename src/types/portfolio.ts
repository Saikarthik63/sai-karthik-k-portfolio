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
  resumeFile: string
  social: SocialLinks
}

export interface SpecItem {
  label: string
  value: string
}

export interface CoreDomain {
  name: string
  icon: string
  description: string
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
  domain: string
  description: string
  stack: string[]
  year: string
  highlights: string[]
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
  id: string
}

export interface PortfolioData {
  profile: Profile
  specSheet: SpecItem[]
  coreDomains: CoreDomain[]
  technicalSkills: SkillCategory[]
  experience: Experience[]
  projectDomains: string[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
}
