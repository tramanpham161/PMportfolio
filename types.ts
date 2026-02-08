
export interface Screenshot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  tagline?: string;
  userProblem: string;
  role: string;
  features: string[];
  decisions?: string;
  productFocus?: string;
  research?: string;
  solution?: string;
  outcomes?: string;
  nextSteps: string;
  url: string;
  screenshots: Screenshot[];
  skillsSignal?: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface Certification {
  name: string;
  url?: string;
}

export interface CertCategory {
  title: string;
  items: Certification[];
}
