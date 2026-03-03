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
  },
  about: {
    title: "About Us",
    description:
      "We are a construction team focused on delivering durable, human-centered spaces with quality and accountability at every phase.",
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
  },
} as const
