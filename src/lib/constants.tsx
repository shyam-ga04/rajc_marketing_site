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

export interface ServiceDetailItem {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  scope: string[]
  process: string[]
  deliverables: string[]
  idealFor: string
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

export interface DetailedProjectItem extends FeaturedProjectItem {
  id: string
  status: "sold" | "available"
  squareFeet: string
  price: string
  overview: string
  scope: string[]
  timeline: string
  clientGoal: string
  challenge: string
  solution: string
  outcome: string
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

export const SERVICE_DETAILS_DATA: ServiceDetailItem[] = [
  {
    id: "home-construction",
    name: "Home Construction",
    shortDescription:
      "Complete house construction with engineering-first execution, quality control, and on-time delivery.",
    fullDescription:
      "Our Home Construction service covers end-to-end execution from concept discussions to final handover. We focus on structural safety, efficient space planning, practical utilities, and durable finishes so clients receive a reliable home built for long-term use.",
    scope: [
      "Site study, foundation, and structural framework execution",
      "Brickwork, slab, plastering, and weather-protected exterior finish",
      "Electrical, plumbing, and waterproofing coordination",
      "Internal partitioning, flooring, and finish completion",
    ],
    process: [
      "Requirement consultation and feasibility review",
      "Design alignment and cost estimation",
      "Execution with stage-wise inspections",
      "Final quality checks and handover",
    ],
    deliverables: [
      "Completed home as per approved drawings",
      "Quality checklist and milestone updates",
      "Post-handover defect support period",
    ],
    idealFor: "Families planning independent homes on owned plots.",
  },
  {
    id: "villa-construction",
    name: "Villa Construction",
    shortDescription:
      "Premium villa projects with modern architecture, luxury finishes, and optimized floor planning.",
    fullDescription:
      "Our Villa Construction service is tailored for premium residential builds where quality detailing, aesthetics, and comfort are critical. We blend structural rigor with architectural appeal and deliver villas designed for long-term value.",
    scope: [
      "Architectural and structural coordination for villa layouts",
      "Facade detailing, premium elevation finishes, and landscape-ready spaces",
      "High-quality flooring, woodwork interfaces, and lighting planning",
      "Complete MEP integration and finishing package",
    ],
    process: [
      "Lifestyle requirements and concept planning",
      "Detailed drawing package and BOQ finalization",
      "Execution with milestone quality audits",
      "Snag closure and premium handover",
    ],
    deliverables: [
      "Fully completed villa as per scope",
      "Execution and quality milestone reports",
      "Handover with finish and utility checks",
    ],
    idealFor: "Clients building luxury villas or duplex residences.",
  },
  {
    id: "renovation-remodeling",
    name: "Building Renovation",
    shortDescription:
      "Renovation and remodeling services to modernize old buildings with improved performance and finish quality.",
    fullDescription:
      "Our Building Renovation service upgrades aging or underperforming properties through layout reconfiguration, service modernization, and finish enhancement. We retain useful structural elements while improving safety, comfort, and functionality.",
    scope: [
      "Selective demolition and structural adjustments",
      "Space reconfiguration and utility line improvements",
      "Waterproofing, plumbing, and electrical upgrades",
      "Interior and exterior restoration works",
    ],
    process: [
      "Condition survey and defect mapping",
      "Phased renovation plan and cost freeze",
      "Execution with minimum disruption scheduling",
      "Final testing and delivery",
    ],
    deliverables: [
      "Upgraded and optimized built space",
      "Improved utility systems and safety performance",
      "Refreshed interiors/exteriors with reduced maintenance needs",
    ],
    idealFor: "Owners revamping old homes, villas, and mixed-use buildings.",
  },
  {
    id: "interior-design",
    name: "Interior Design",
    shortDescription:
      "Functional and aesthetic interior design execution for homes and villas.",
    fullDescription:
      "Our Interior Design service translates lifestyle and utility needs into practical interior environments. From layout planning to material selection and final execution, we deliver interiors that are visually cohesive and durable for daily use.",
    scope: [
      "Interior layout planning and zoning",
      "Material, finish, and lighting specification",
      "Modular furniture and storage planning",
      "Site coordination for fit-out execution",
    ],
    process: [
      "Requirement capture and style direction",
      "Space planning with mood boards and materials",
      "Execution supervision and quality reviews",
      "Styling, punch list closure, and handover",
    ],
    deliverables: [
      "Finalized design plan and material selections",
      "Executed interior spaces ready for use",
      "Quality review and completion checklist",
    ],
    idealFor: "Homeowners seeking personalized and practical interiors.",
  },
  {
    id: "architectural-planning",
    name: "Architectural Planning",
    shortDescription:
      "Architectural planning services for optimized layouts, approvals, and build-ready drawings.",
    fullDescription:
      "Our Architectural Planning service creates clear, build-ready plans that balance aesthetics, compliance, structure, and daily functionality. We help clients convert ideas into practical design documents and approval-ready sets.",
    scope: [
      "Concept layouts and space planning alternatives",
      "Architectural drawings and technical detailing",
      "Approval drawing preparation and coordination",
      "Revision support with engineering inputs",
    ],
    process: [
      "Requirement discussion and site understanding",
      "Concept options and design freeze",
      "Working drawing package development",
      "Approval and execution support",
    ],
    deliverables: [
      "Architectural concept and detailed drawings",
      "Approval-ready plan set",
      "Execution reference documents",
    ],
    idealFor: "Clients requiring complete planning before construction starts.",
  },
  {
    id: "turnkey-construction",
    name: "Turnkey Construction",
    shortDescription:
      "Single-window construction delivery from design coordination to final handover.",
    fullDescription:
      "Our Turnkey Construction service offers a complete delivery model where one team handles planning support, procurement, execution, quality, and handover. This reduces client coordination load and improves schedule and budget control.",
    scope: [
      "Integrated planning, procurement, and site execution",
      "Vendor and workforce coordination",
      "Quality checks at each milestone",
      "Testing, commissioning, and handover documentation",
    ],
    process: [
      "Scope and budget alignment",
      "Construction planning and procurement",
      "Execution with reporting dashboards",
      "Final handover and closure support",
    ],
    deliverables: [
      "Fully completed ready-to-use project",
      "Single-point accountability across stages",
      "Progress and quality documentation",
    ],
    idealFor: "Busy homeowners and investors preferring end-to-end execution.",
  },
  {
    id: "structural-consultation",
    name: "Structural Consultation",
    shortDescription:
      "Expert structural analysis and guidance for safe, economical, and code-compliant construction.",
    fullDescription:
      "Our Structural Consultation service helps clients and site teams make technically sound decisions on load paths, reinforcement strategy, retrofitting, and structural safety. We focus on engineering integrity and practical execution feasibility.",
    scope: [
      "Structural concept review and feasibility",
      "Load assessment and reinforcement recommendations",
      "Site inspection and structural risk identification",
      "Retrofitting and strengthening guidance",
    ],
    process: [
      "Document and site condition review",
      "Engineering analysis and recommendations",
      "Design optimization or corrective strategy",
      "Implementation guidance and verification",
    ],
    deliverables: [
      "Structural recommendations report",
      "Risk and mitigation checklist",
      "Execution guidance for safe implementation",
    ],
    idealFor: "Clients needing engineering confidence before or during construction.",
  },
  {
    id: "house-extension",
    name: "House Extension",
    shortDescription:
      "Horizontal and vertical extensions that integrate safely with your existing home structure.",
    fullDescription:
      "Our House Extension service expands usable living space through additional floors, rooms, terraces, or utility blocks while preserving structural safety and functionality. We ensure new works blend with existing architecture and services.",
    scope: [
      "Existing structure assessment and extension feasibility",
      "Design and service integration planning",
      "Extension civil works and structural tie-ins",
      "Finishing and utility commissioning",
    ],
    process: [
      "Site assessment and requirement finalization",
      "Design, approvals, and budget planning",
      "Extension construction with quality control",
      "Testing and seamless handover",
    ],
    deliverables: [
      "Additional functional built-up space",
      "Integrated utility and structural coordination",
      "Completion with finish matching support",
    ],
    idealFor: "Families needing extra rooms or floor additions without relocating.",
  },
]

export const DEFAULT_SERVICES_PREVIEW_DATA: ServicesPreviewData = {
  title: "Services Preview",
  description:
    "From planning to execution, we deliver complete construction services with reliability and quality.",
  items: SERVICE_DETAILS_DATA.map((service) => ({
    name: service.name,
    description: service.shortDescription,
    linkLabel: "View service",
    href: "/services",
  })),
}

export const PROJECTS_DETAILS_DATA: DetailedProjectItem[] = [
  {
    id: "skyline-villa",
    status: "sold",
    imageUrl:
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Modern house exterior design",
    name: "Skyline Villa",
    location: "Bengaluru, Karnataka",
    squareFeet: "4,200 sq ft",
    price: "INR 2.1 Cr",
    description:
      "A contemporary family residence with optimized daylight, ventilation, and durable exterior finishes.",
    overview:
      "Skyline Villa is a G+1 premium residential project designed for a multi-generational family. The architectural intent focused on clean geometry, maximum natural light, and efficient internal flow across public and private zones.",
    scope: [
      "Complete civil and structural execution",
      "Facade development with weather-resistant finishes",
      "Interior fit-outs for kitchen, living, and bedrooms",
      "MEP coordination and smart lighting integration",
    ],
    timeline: "11 months (design coordination to handover)",
    clientGoal:
      "Deliver a modern home that stays naturally cool, uses durable materials, and supports low-maintenance living.",
    challenge:
      "Plot-side constraints and strict neighborhood regulations impacted crane movement and staging options.",
    solution:
      "Adopted phased procurement and a micro-scheduling approach for concrete pours and facade installation.",
    outcome:
      "Project was completed on schedule with high finish quality and improved energy performance through better shading and ventilation planning.",
  },
  {
    id: "heritage-court-home",
    status: "available",
    imageUrl:
      "https://images.pexels.com/photos/19365757/pexels-photo-19365757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Colonial style home exterior",
    name: "Heritage Court Home",
    location: "Mysuru, Karnataka",
    squareFeet: "3,600 sq ft",
    price: "INR 1.7 Cr",
    description:
      "A heritage-inspired home combining traditional facade details with modern structural and utility upgrades.",
    overview:
      "This project balanced heritage aesthetics with current safety and utility requirements. The home preserves the original character through proportioned elevations and ornamental details while upgrading structural and service systems.",
    scope: [
      "Structural strengthening and seismic compliance improvements",
      "Facade restoration and detail recreation",
      "Electrical, plumbing, and waterproofing upgrades",
      "Custom woodwork and interior surface refinishing",
    ],
    timeline: "9 months (restoration and modernization package)",
    clientGoal:
      "Retain the home's historic visual identity while improving safety, comfort, and operational reliability.",
    challenge:
      "Existing drawings were incomplete and several legacy elements required on-site measurement and rework.",
    solution:
      "Executed detailed as-built documentation, mockups for critical heritage features, and a staged approval process.",
    outcome:
      "The completed home preserved its original visual story while achieving modern performance and reduced maintenance risk.",
  },
  {
    id: "palm-crest-residence",
    status: "sold",
    imageUrl:
      "https://images.pexels.com/photos/23880098/pexels-photo-23880098.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Mediterranean style house exterior",
    name: "Palm Crest Residence",
    location: "Hyderabad, Telangana",
    squareFeet: "4,850 sq ft",
    price: "INR 2.4 Cr",
    description:
      "A premium two-story residential build focused on outdoor living, landscaping, and weather-resilient materials.",
    overview:
      "Palm Crest Residence is a lifestyle-focused project that merges indoor comfort with outdoor utility. The planning emphasizes shaded decks, entertainment zones, and resilient materials for hot-weather conditions.",
    scope: [
      "Two-story residential civil works and finishing",
      "Landscape-ready levels and outdoor living zones",
      "Rainwater drainage and terrace waterproofing system",
      "Premium interior finishes and custom staircase detailing",
    ],
    timeline: "12 months (turnkey execution)",
    clientGoal:
      "Create a premium family home with strong indoor-outdoor connectivity and year-round usability.",
    challenge:
      "High summer temperatures and heavy monsoon bursts required careful detailing for long-term durability.",
    solution:
      "Applied reflective coatings, deep overhangs, improved slope design, and a reinforced waterproofing stack.",
    outcome:
      "The project achieved a durable envelope and high occupant comfort, with outdoor spaces actively used across seasons.",
  },
  {
    id: "greenstone-retreat",
    status: "available",
    imageUrl:
      "https://images.pexels.com/photos/20336639/pexels-photo-20336639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Rustic stone house exterior",
    name: "Greenstone Retreat",
    location: "Coimbatore, Tamil Nadu",
    squareFeet: "3,950 sq ft",
    price: "INR 1.9 Cr",
    description:
      "A countryside-style project with natural stone textures and low-maintenance construction planning.",
    overview:
      "Greenstone Retreat is a low-density countryside residence built around natural material expression and practical upkeep. The project uses stone-forward exteriors, open courtyards, and robust drainage planning.",
    scope: [
      "Site grading and foundation works for sloped terrain",
      "Masonry and stone-clad exterior construction",
      "Courtyard planning with passive ventilation strategy",
      "Utility infrastructure and long-life finishing package",
    ],
    timeline: "10 months (civil to final handover)",
    clientGoal:
      "Build a calm weekend retreat with natural textures and minimal long-term operating effort.",
    challenge:
      "Variable terrain and seasonal water runoff created risk for plinth protection and service routing.",
    solution:
      "Introduced stepped retaining details, improved surface drainage, and protected underground service corridors.",
    outcome:
      "Delivered a resilient countryside home with strong material character and efficient maintenance requirements.",
  },
]

export const DEFAULT_FEATURED_PROJECTS_DATA: FeaturedProjectsData = {
  title: "Featured Projects",
  items: PROJECTS_DETAILS_DATA.map(
    ({ imageUrl, imageAlt, name, location, description }) => ({
      imageUrl,
      imageAlt,
      name,
      location,
      description,
    })
  ),
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
