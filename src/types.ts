export interface CaseStudyData {
  title: string;
  problem: string;
  whatIDidAndDecided: {
    overview: string;
    keyDecisions: string[];
    customModules: string[];
  };
  whatCameOfIt: {
    overview: string;
    outcomes: string[];
    integrationNote: string;
    limitationsNote: string;
  };
  whatIdDoDifferently: string[];
  technologiesUsed: string[];
  myRole: {
    title: string;
    responsibilities: string[];
  };
  lessonsLearned: string;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  duration: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architecture?: string[];
  myRole: string;
  status: string;
  githubUrl: string;
  liveDemoUrl: string | null;
  resumeReference: string;
  caseStudy?: CaseStudyData;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Internship {
  title: string;
  company: string;
  duration: string;
  bulletPoints: string[];
}

export interface Education {
  institution: string;
  degree: string;
  cgpa: string;
  duration: string;
}
