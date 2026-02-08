import { Project, Skill, CertCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'funding-checker',
    name: 'Childcare funding checker (UK)',
    tagline: 'A simple tool that helps parents quickly understand childcare funding eligibility, timelines, and next steps.',
    url: 'https://childcarechecker.vercel.app',
    userProblem: 'Parents often struggle to navigate UK childcare funding due to multiple overlapping schemes with different eligibility rules, unclear timelines tied to a child’s age and parental work status, and policy language that is difficult to interpret in real-life situations. As a result, many parents miss funding opportunities or make childcare decisions without full information.',
    role: 'Product lead & researcher',
    features: [
      'Problem: Confusion around funding eligibility, start dates, and scheme differences',
      'Research: Forum analysis and parent conversations highlighted widespread misunderstanding of childcare policies',
      'Solution: A simple eligibility checker translating complex rules into clear outcomes',
      'Key features: Quick questionnaire, plain-language explanations, key dates, official resource links',
      'Impact: Increased clarity and confidence in early childcare planning',
      'Future: Cost visualisation, more intensive cost breakdowns'
    ],
    research: 'The product was shaped through qualitative research and iterative simplification. I analysed recurring questions and misconceptions on parenting forums and spoke with parents to understand confusion points and decision triggers. This identified a core need for personalised answers, clear timelines, and plain language, prompting me to prioritise speed and trust over exhaustive coverage.',
    solution: 'A simple eligibility checker that uses a short questionnaire to personalise outcomes, translates funding rules into clear eligibility results and key dates, and surfaces next steps early to support planning. It links directly to official GOV.UK resources and covers England, Scotland, Wales and Northern Ireland.',
    outcomes: 'Parents gain clarity in minutes instead of hours. The reduced cognitive load leads to higher confidence in planning decisions, demonstrating the immense value of policy-to-product translation and focused UX.',
    nextSteps: 'Developing a cost visualisation tool and more intensive cost breakdowns to help parents understand the full financial picture of early childcare.',
    skillsSignal: 'user research, policy translation, UX simplification, prioritisation, and product thinking.',
    screenshots: [
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Childcare%20Checker%20-%20main%20page.png', 
        caption: 'The main landing page: Designed for simplicity and ease of use for busy parents.' 
      },
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Childcare%20Checker%20-%20Eligibility%20Checker.png', 
        caption: 'The Eligibility Checker: Translating complex government rules into a simple, personalised result.' 
      },
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Childcare%20Checker%20-%20Cost%20Calculation.png', 
        caption: 'Cost Calculation: A visual breakdown of funding vs. actual costs to help with financial planning.' 
      },
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Childcare%20Checker%20-%20Find%20provider%20.png', 
        caption: 'Provider Search: Helping parents bridge the gap between eligibility and finding an actual place.' 
      }
    ]
  },
  {
    id: 'rtw-planner',
    name: 'Back to work: planner for parents',
    tagline: 'A practical, easy-to-use tool that helps parents make sense of childcare options, funding timelines, and returning to work.',
    url: 'https://backtowork.vercel.app',
    userProblem: 'Parents returning to work face a highly fragmented experience with unclear timelines around childcare, funding, and employment decisions. Complex policies are difficult to translate into personal action, and scattered information across multiple sources often leads to missed deadlines, funding gaps, and unnecessary stress during an already demanding life transition.',
    research: 'The product was informed by real-world qualitative research, including reviewing common questions and confusion points on parenting forums and speaking directly with parents about their return-to-work experiences. This identified a strong need for clear sequencing and reassurance, leading to a design focused on simplicity, emotional ease, and low cognitive load.',
    solution: 'A phased planning experience that guides parents through the before, during, and after return-to-work stages. It breaks complex policies into actionable steps, provides “what to do next” checklists to reduce decision fatigue, and includes prompts to support conversations with employers while linking to official trusted resources.',
    outcomes: 'Clear sequencing significantly reduces overwhelm. Parents value knowing what can be decided later versus now. Emotional clarity and simplicity are as important as functional accuracy in supporting this transition.',
    role: 'Product Lead & UX Researcher',
    features: [
      'Problem: Unclear timelines and fragmented experience during return-to-work',
      'Research: Qualitative insights from parenting forums and interviews with parents',
      'Solution: Phased planning tool with actionable checklists, practical tips and timelines',
      'Key features: Before/During/After phases, employer prompts, policy-to-action translation',
      'Impact: Reduced decision fatigue and improved emotional clarity',
      'Future: Customisable reminders and integration with local support services'
    ],
    nextSteps: 'Developing customisable reminders and integrating localised resource links to provide even more specific support for parents based on their region.',
    skillsSignal: 'user research, journey mapping, UX prioritisation, emotional design, policy translation, and product strategy.',
    screenshots: [
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Back%20to%20work%20form.png', 
        caption: 'Intuitive Intake: Simple questionnaires used to generate a personalised planning roadmap.' 
      },
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Back%20to%20work%20tips.png', 
        caption: 'Transition Guidance: Useful, plain-language tips for the before, during, and after phases of returning to work.' 
      },
      { 
        url: 'https://raw.githubusercontent.com/tramanpham161/PMportfolio/main/Timeline%20illustration.png', 
        caption: 'Visual Clarity: Demonstrating how simple key information like funding timelines and milestones is illustrated.' 
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  { 
    name: 'User empathy & discovery', 
    description: 'Deeply embedded in parenting communities, I identify real pain points that often go unnoticed without lived experience.' 
  },
  { 
    name: 'Systems & context analysis', 
    description: 'I compare childcare, funding, and parenting systems across different cultural and policy contexts to uncover better, more resilient product approaches.' 
  },
  { 
    name: 'Focused MVP thinking', 
    description: 'I prioritise high-stress “moments that matter” and ship simple features that deliver immediate clarity and relief for users.' 
  },
  { 
    name: 'Clear product communication', 
    description: 'I translate complex user needs and constraints into clear priorities, practical roadmaps, and shared understanding across teams.' 
  }
];

export const CERTIFICATIONS: CertCategory[] = [
  {
    title: "Project & Delivery",
    items: [
      { name: "PMP Project Management" }
    ]
  },
  {
    title: "Early Years (OpenLearn)",
    items: [
      { name: "Supporting babies and toddlers" },
      { name: "Children’s experiences with digital technologies" },
      { name: "Children’s perspectives on play" },
      { name: "Exploring books for children: words and pictures" },
      { name: "Play, learning and the brain" }
    ]
  },
  {
    title: "AI & Digital (Google)",
    items: [
      { name: "Gemini Certified Educator (Google AI in Education)" },
      { name: "Google Certified Educator Level 1" },
      { name: "Google Certified Educator Level 2" }
    ]
  },
  {
    title: "UK Government Training",
    items: [
      { 
        name: "Early years child development training",
        url: "https://child-development-training.education.gov.uk" 
      }
    ]
  }
];