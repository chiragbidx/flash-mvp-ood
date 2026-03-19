// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "MailForge is here",
    titleBefore: "",
    titleHighlight: "Effortless Email Marketing for Modern Teams",
    titleAfter: "",
    subtitle:
      "MailForge empowers you to craft, send, and track email campaigns that grow your business. Organize your contacts, design professional emails, and analyze results—all with your team.",
    primaryCta: { label: "Start Sending Emails", href: "/auth#signup" },
    secondaryCta: { label: "Explore features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailForge dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailForge",
    heading: "A collaborative platform for teams",
    description:
      "MailForge is built for businesses that want an all-in-one workspace for email campaign design, contact management, and analytics.",
    items: [
      {
        icon: "Blocks",
        title: "Work Together",
        description: "Real-time collaboration lets your whole team build campaigns and manage contacts easily.",
      },
      {
        icon: "LineChart",
        title: "Drive Results",
        description: "Measure what matters and optimize your outreach with simple reports.",
      },
      {
        icon: "Mail",
        title: "Engage Your Audience",
        description: "Target, personalize, and deliver professional campaigns that perform.",
      },
      {
        icon: "Sparkle",
        title: "Premium Experience",
        description: "Modern UI and smart workflows enable fast, effective campaign building.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "What makes MailForge powerful?",
    subtitle:
      "MailForge combines collaboration, automation, analytics, and intuitive tooling for growing businesses.",
    items: [
      { icon: "Users", title: "Collaborative Campaigns", description: "Work together to plan, design, and launch email campaigns from a unified dashboard." },
      { icon: "AddressBook", title: "Contact Management", description: "Easily import, organize, and segment your audience for targeted messaging." },
      { icon: "PieChart", title: "Simple Analytics", description: "Track opens, clicks, and key metrics to optimize your campaigns." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Everything you need to succeed",
    subtitle:
      "Go from concept to launch with tools for importing contacts, building campaigns, and tracking performance.",
    items: [
      { title: "Campaign Creation", description: "Design, schedule, and send beautifully branded email campaigns.", pro: false },
      { title: "List Management", description: "Import, segment, and grow your contact lists.", pro: false },
      { title: "Team Collaboration", description: "Multiple users, role-based control, and shared dashboards.", pro: false },
      { title: "Campaign Analytics", description: "See what's working—opens, clicks, and conversions.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams growing with MailForge",
    reviews: [
      { image: "/demo-img.jpg", name: "Chris Park", role: "Marketing Lead, CloudSync", comment: "MailForge helped us streamline our campaigns – team members love collaborating on lists and analytics.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Leslie Wu", role: "Growth Manager, NextFlex", comment: "Easy enough for our new hires, powerful enough for our data team. Analytics made a real difference.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Juan Lopez", role: "Founder, LaunchSpark", comment: "We switched from manual email sending to MailForge and instantly improved engagement.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Naomi Gold", role: "Owner, StartUp Studio", comment: "Onboarding was simple and the contact import worked perfectly.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Aidan Rose", role: "CMO, VentureGrow", comment: "Contact management and team workflow saved hours each week.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sarah Lind", role: "Content Strategist, CivicMail", comment: "Launching professional campaigns used to take days, now it takes hours.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the MailForge team",
    members: [
      // Placeholder, can customize later
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible pricing for every business",
    subtitle: "Start free, scale as your campaigns and team grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for small businesses experimenting with email campaigns.",
        buttonText: "Start for free",
        benefits: ["Up to 3 teammates", "1000 emails/mo", "Core features", "Basic analytics"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "Best for growing businesses and small teams.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "10,000 emails/mo", "Automation", "Advanced analytics", "Priority support"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For large organizations with custom needs and compliance.",
        buttonText: "Contact sales",
        benefits: ["Unlimited usage", "Custom onboarding", "Dedicated support", "Integration services"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to MailForge",
    description:
      "Questions? Need a product demo? Want help migrating from another tool? We’re here for you.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Worldwide" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM UTC"] },
    },
    formSubjects: ["Platform Demo", "Contact Import Help", "Team Collaboration", "Billing Question"],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Your questions about MailForge",
    items: [
      { question: "Is MailForge free to start?", answer: "Yes. You can start with up to 3 teammates and 1000 emails a month." },
      { question: "Can I use MailForge with my team?", answer: "Absolutely. Collaboration is at the heart of our platform." },
      { question: "Does MailForge show analytics?", answer: "Track opens, clicks, and key audience metrics for every campaign." },
      { question: "Can I import my existing contacts?", answer: "Yes. Easily import CSV or from other platforms." },
      { question: "How quickly can I launch my first campaign?", answer: "Create and launch a campaign in minutes with guided flows." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailForge",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "Github", href: "#" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailForge.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailForge",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "MailForge preview" },
    features: [
      { title: "Collaborative Campaigns", description: "Work together to plan, design, and launch from one dashboard." },
      { title: "Contact Management", description: "Segment and grow your audience for better results." },
      { title: "Simple Analytics", description: "See opens, clicks, and optimize with clear data." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Create Account",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}