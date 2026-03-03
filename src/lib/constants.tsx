export interface QuickIntroData {
  introTitle: string
  introLines: string[]
  yearsExperienceLabel: string
  yearsExperienceValue: string
  projectTypesLabel: string
  projectTypesValue: string
}

export interface ServicePreviewItem {
  name: string
  description: string
  linkLabel: string
  href: "/services"
}

export interface ServicesPreviewData {
  title: string
  description: string
  items: ServicePreviewItem[]
}

export interface FeaturedProjectItem {
  imageUrl: string
  imageAlt: string
  name: string
  location: string
  description: string
}

export interface FeaturedProjectsData {
  title: string
  items: FeaturedProjectItem[]
}

export interface WhyChooseUsData {
  title: string
  items: WhyChooseUsItem[]
}

export interface FooterData {
  companyName: string
  address: string
  phone: string
  email: string
  copyright: string
}

export interface AdminLoginText {
  title: string
  subtitle: string
  emailLabel: string
  passwordLabel: string
  emailPlaceholder: string
  passwordPlaceholder: string
  signInButton: string
  signingInButton: string
  signedInPrefix: string
  unknownError: string
  emailRequiredError: string
  emailInvalidError: string
  passwordRequiredError: string
  passwordMinLengthError: string
}

export interface ContactFormText {
  nameLabel: string
  namePlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  locationLabel: string
  locationPlaceholder: string
  budgetRangeLabel: string
  budgetRangePlaceholder: string
  budgetRangeOptions: string[]
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  successMessage: string
  nameRequiredError: string
  nameInvalidError: string
  phoneRequiredError: string
  phoneInvalidError: string
  emailRequiredError: string
  emailInvalidError: string
  locationRequiredError: string
  budgetRangeRequiredError: string
  messageRequiredError: string
  messageInvalidError: string
}

export interface AboutDetailData {
  companyIntroduction: {
    heading: string
    whoWeAre: string
    yearsInBusinessLabel: string
    yearsInBusinessValue: string
    projectTypesLabel: string
    projectTypesValue: string
  }
  missionVision: {
    heading: string
    missionTitle: string
    mission: string
    visionTitle: string
    vision: string
  }
  companyJourney: {
    heading: string
    startedTitle: string
    startedDescription: string
    milestonesTitle: string
    milestones: string[]
  }
  leadership: {
    heading: string
    name: string
    role: string
    description: string
  }
  strengthsValues: {
    heading: string
    items: string[]
  }
  companyLocation: {
    heading: string
    address: string
    mapEmbedUrl: string
  }
}

export type WhyChooseUsIconKey =
  | "experience"
  | "qualityMaterials"
  | "onTimeDelivery"
  | "transparentPricing"
  | "safetyFirst"
  | "skilledTeam"

export interface WhyChooseUsItem {
  title: string
  icon: WhyChooseUsIconKey
}

export const DEFAULT_QUICK_INTRO_DATA: QuickIntroData = {
  introTitle: "Quick About RAJ Constructions",
  introLines: [
    "RAJ Constructions is a trusted construction partner delivering quality work with clear planning and disciplined execution.",
    "We combine practical engineering with on-ground experience to create spaces that are safe, functional, and built to endure.",
    "Our team works closely with clients from first concept to final handover, keeping timelines and quality standards in focus.",
  ],
  yearsExperienceLabel: "Years of experience",
  yearsExperienceValue: "15+",
  projectTypesLabel: "Type of projects handled",
  projectTypesValue:
    "Residential homes, commercial buildings, renovation projects, and turnkey construction solutions.",
}

export const DEFAULT_SERVICES_PREVIEW_DATA: ServicesPreviewData = {
  title: "Services Preview",
  description:
    "From planning to execution, we deliver complete construction services with reliability and quality.",
  items: [
    {
      name: "Residential Construction",
      description:
        "Custom homes and housing projects built with durable materials and practical layouts.",
      linkLabel: "View service",
      href: "/services",
    },
    {
      name: "Commercial Construction",
      description:
        "Office and retail spaces designed for performance, compliance, and long-term use.",
      linkLabel: "View service",
      href: "/services",
    },
    {
      name: "Renovation & Remodeling",
      description:
        "Modernization and structural upgrades that improve functionality and visual quality.",
      linkLabel: "View service",
      href: "/services",
    },
    {
      name: "Turnkey Projects",
      description:
        "End-to-end delivery from concept, design coordination, and approvals to handover.",
      linkLabel: "View service",
      href: "/services",
    },
    {
      name: "Interior Fit-Outs",
      description:
        "Efficient interior execution for residential and commercial spaces with quality finishing.",
      linkLabel: "View service",
      href: "/services",
    },
    {
      name: "Project Management",
      description:
        "Schedule, cost, and vendor coordination to keep projects on time and within budget.",
      linkLabel: "View service",
      href: "/services",
    },
  ],
}

export const DEFAULT_FEATURED_PROJECTS_DATA: FeaturedProjectsData = {
  title: "Featured Projects",
  items: [
    {
      imageUrl:
        "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Modern house exterior design",
      name: "Skyline Villa",
      location: "Bengaluru, Karnataka",
      description:
        "A contemporary family residence with optimized daylight, ventilation, and durable exterior finishes.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/19365757/pexels-photo-19365757.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Colonial style home exterior",
      name: "Heritage Court Home",
      location: "Mysuru, Karnataka",
      description:
        "A heritage-inspired home combining traditional facade details with modern structural and utility upgrades.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/23880098/pexels-photo-23880098.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Mediterranean style house exterior",
      name: "Palm Crest Residence",
      location: "Hyderabad, Telangana",
      description:
        "A premium two-story residential build focused on outdoor living, landscaping, and weather-resilient materials.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20336639/pexels-photo-20336639.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imageAlt: "Rustic stone house exterior",
      name: "Greenstone Retreat",
      location: "Coimbatore, Tamil Nadu",
      description:
        "A countryside-style project with natural stone textures and low-maintenance construction planning.",
    },
  ],
}

export const DEFAULT_WHY_CHOOSE_US_DATA: WhyChooseUsData = {
  title: "Why Choose Us",
  items: [
    { title: "Experience", icon: "experience" },
    { title: "Quality materials", icon: "qualityMaterials" },
    { title: "On-time delivery", icon: "onTimeDelivery" },
    { title: "Transparent pricing", icon: "transparentPricing" },
    { title: "Safety-first approach", icon: "safetyFirst" },
    { title: "Skilled workforce", icon: "skilledTeam" },
  ],
}

export const DEFAULT_FOOTER_DATA: FooterData = {
  companyName: "RAJ Constructions",
  address: "123 Builder Street, Bengaluru, Karnataka 560001",
  phone: "+91 98765 43210",
  email: "info@rajconstructions.com",
  copyright: "@ 2026 RAJ Constructions. All rights reserved.",
}

export const DEFAULT_ADMIN_LOGIN_TEXT: AdminLoginText = {
  title: "Admin Login",
  subtitle: "Sign in with your admin credentials.",
  emailLabel: "Email",
  passwordLabel: "Password",
  emailPlaceholder: "admin@example.com",
  passwordPlaceholder: "Enter password",
  signInButton: "Sign in",
  signingInButton: "Signing in...",
  signedInPrefix: "Signed in as",
  unknownError: "Something went wrong while signing in.",
  emailRequiredError: "Email is required.",
  emailInvalidError: "Enter a valid email address.",
  passwordRequiredError: "Password is required.",
  passwordMinLengthError: "Password must be at least 6 characters.",
}

export const DEFAULT_CONTACT_FORM_TEXT: ContactFormText = {
  nameLabel: "Name",
  namePlaceholder: "Enter your full name",
  phoneLabel: "Phone",
  phonePlaceholder: "Enter your phone number",
  emailLabel: "Email",
  emailPlaceholder: "Enter your email",
  locationLabel: "Location",
  locationPlaceholder: "Enter your city/location",
  budgetRangeLabel: "Budget range",
  budgetRangePlaceholder: "Select budget range",
  budgetRangeOptions: [
    "Below 10 Lakhs",
    "10 - 25 Lakhs",
    "25 - 50 Lakhs",
    "50 Lakhs - 1 Crore",
    "Above 1 Crore",
  ],
  messageLabel: "Message",
  messagePlaceholder: "Write your project requirements",
  submitButton: "Submit",
  successMessage: "Thanks for reaching out. We will contact you soon.",
  nameRequiredError: "Name is required.",
  nameInvalidError: "Name must be at least 2 characters.",
  phoneRequiredError: "Phone is required.",
  phoneInvalidError: "Enter a valid phone number.",
  emailRequiredError: "Email is required.",
  emailInvalidError: "Enter a valid email address.",
  locationRequiredError: "Location is required.",
  budgetRangeRequiredError: "Budget range is required.",
  messageRequiredError: "Message is required.",
  messageInvalidError: "Message must be at least 10 characters.",
}

export const DEFAULT_ABOUT_DETAIL_DATA: AboutDetailData = {
  companyIntroduction: {
    heading: "Company Introduction",
    whoWeAre:
      "RAJ Constructions is a full-service construction company focused on residential, commercial, and renovation projects. We combine engineering discipline, practical execution, and client-first communication to deliver spaces that are durable, functional, and built with long-term value in mind.",
    yearsInBusinessLabel: "Years in business",
    yearsInBusinessValue: "15+ years of execution experience",
    projectTypesLabel: "Types of projects",
    projectTypesValue:
      "Residential homes, apartment blocks, commercial buildings, interior fit-outs, renovations, and turnkey developments.",
  },
  missionVision: {
    heading: "Mission & Vision",
    missionTitle: "Mission",
    mission:
      "To build dependable, high-quality projects through safe practices, transparent communication, and on-time delivery.",
    visionTitle: "Vision",
    vision:
      "To be a trusted construction partner known for consistent quality, ethical operations, and long-lasting client relationships.",
  },
  companyJourney: {
    heading: "Company Story / Journey",
    startedTitle: "When we started",
    startedDescription:
      "RAJ Constructions began in 2010 as a small local contracting team and steadily grew by delivering projects with reliability and accountability.",
    milestonesTitle: "Key milestones",
    milestones: [
      "2010: Company founded with a focus on residential construction.",
      "2014: Expanded into commercial project execution and site management.",
      "2018: Launched turnkey project delivery across planning to handover.",
      "2022: Crossed 100+ successfully completed projects.",
      "2025: Strengthened process quality, safety standards, and client reporting systems.",
    ],
  },
  leadership: {
    heading: "Leadership / Founder",
    name: "Rajesh Kumar",
    role: "Founder & Managing Director",
    description:
      "Rajesh leads the company with a strong focus on construction quality, disciplined planning, and transparent client collaboration. His hands-on project oversight has shaped RAJ Constructions into a dependable execution partner.",
  },
  strengthsValues: {
    heading: "Strengths / Values",
    items: ["Safety", "Quality", "Transparency", "Customer satisfaction"],
  },
  companyLocation: {
    heading: "Company Location",
    address: "123 Builder Street, Bengaluru, Karnataka 560001",
    mapEmbedUrl:
      "https://www.google.com/maps?q=123+Builder+Street,+Bengaluru,+Karnataka+560001&output=embed",
  },
}

export const SCREEN_TEXT = {
  home: {
    badge: "Raj Constructions",
    quote: '"We build spaces that hold people, purpose, and possibility."',
    description:
      "From concept to completion, our team delivers durable, human-first projects designed to last.",
    ctaExplore: "Explore Portfolio",
    ...DEFAULT_QUICK_INTRO_DATA,
    servicesPreview: DEFAULT_SERVICES_PREVIEW_DATA,
    featuredProjects: DEFAULT_FEATURED_PROJECTS_DATA,
    whyChooseUs: DEFAULT_WHY_CHOOSE_US_DATA,
  },
  about: {
    title: "About Us",
    description:
      "We are a construction team focused on delivering durable, human-centered spaces with quality and accountability at every phase.",
    details: DEFAULT_ABOUT_DETAIL_DATA,
  },
  services: {
    title: "Services",
    description:
      "End-to-end construction services including planning, execution, site management, and quality control.",
  },
  projectDetails: {
    title: "Project Details",
    description:
      "Explore completed and ongoing projects with scope highlights, timelines, and delivery outcomes.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Reach out to discuss your project requirements, timeline, and budget. We respond quickly with practical next steps.",
    form: DEFAULT_CONTACT_FORM_TEXT,
  },
  footer: DEFAULT_FOOTER_DATA,
  adminLogin: DEFAULT_ADMIN_LOGIN_TEXT,
} as const
