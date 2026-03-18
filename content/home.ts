import { StaticImageData } from "next/image";

// (types remain unchanged, omitted for brevity)

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "New",
    badgeOuter: "ChatNest is live",
    titleBefore: "Empower Your Team with",
    titleHighlight: "Seamless Communication",
    titleAfter: "",
    subtitle:
      "ChatNest is your organization’s secure internal messaging platform. Connect, collaborate, and keep every conversation in one place.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "Schedule a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ChatNest dashboard preview",
  },

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

  benefits: {
    eyebrow: "Why ChatNest",
    heading: "Unlock Team Productivity",
    description:
      "ChatNest helps your team work faster together, onboard new members with ease, stay secure, and focus on meaningful conversations.",
    items: [
      {
        icon: "Blocks",
        title: "Boost Productivity",
        description: "Boost productivity with focused discussions."
      },
      {
        icon: "KeyRound",
        title: "Secure Communication",
        description: "Keep sensitive information safe within your organization."
      },
      {
        icon: "UserPlus",
        title: "Easy Onboarding",
        description: "Effortlessly onboard new team members."
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "ChatNest Core Features",
    subtitle:
      "All the essentials you need to organize internal team conversations and keep communications flowing.",
    items: [
      { icon: "Send", title: "Real-Time Messaging", description: "Instantly send and receive messages with teammates." },
      { icon: "MessagesSquare", title: "Organized Conversations", description: "Threads and channels keep discussions tidy and accessible." },
      { icon: "Shield", title: "Secure and Private", description: "All messages are kept private and secure within your organization." },
      { icon: "Users", title: "Easy Team Management", description: "Invite, onboard, and manage your team without hassle." },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Communication Made Simple",
    subtitle:
      "ChatNest covers all your messaging needs so your team can focus on what matters.",
    items: [
      { title: "Internal Messaging", description: "Chat instantly with anyone in your organization.", pro: false },
      { title: "Team Channels", description: "Create public or private channels for different teams or topics.", pro: false },
      { title: "Secure Data", description: "All conversations remain secure and private.", pro: false },
      { title: "Organization Controls", description: "Admins can manage users, channels, and permissions.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams collaborating with ChatNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Jane Lee", role: "COO, GrowthEdge", comment: "ChatNest keeps all our conversations organized and accessible. Onboarding was a breeze!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Anthony Kim", role: "Team Lead, Acme Tech", comment: "With ChatNest, our team communication is more focused and efficient than ever before.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Maria Gomez", role: "HR, FastWorks", comment: "We love the security and reliability of ChatNest for internal messaging.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Alex Chen", role: "CEO, Innovate", comment: "A messaging platform we can trust with our most sensitive conversations.", rating: 4.8 },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the ChatNest team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "CEO"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing, designed for teams",
    subtitle: "Affordable options for organizations of any size.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Great for small teams and pilots.",
        buttonText: "Start for Free",
        benefits: [
          "Up to 10 teammates",
          "Direct messages and channels",
          "Secure conversations",
          "Help center support",
          "Basic admin controls"
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 59,
        description: "For teams ready to scale collaboration.",
        buttonText: "Start Trial",
        benefits: [
          "Unlimited teammates",
          "Advanced channel controls",
          "Priority support",
          "Audit logs"
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 249,
        description: "For organizations needing compliance & support.",
        buttonText: "Contact Sales",
        benefits: [
          "SSO / SAML integration",
          "Dedicated onboarding",
          "Compliance and security options",
          "Dedicated account manager"
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with ChatNest",
    description:
      "Have questions or need support for your team’s communication? Contact us—we’re here to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Global" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Schedule a Demo", "Pricing Inquiry", "Support", "Feature Request"],
    formSubmitLabel: "Contact ChatNest",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "ChatNest FAQ",
    items: [
      { question: "Is ChatNest secure?", answer: "Yes. All messages are encrypted and kept within your organization." },
      { question: "Can I manage users and channels?", answer: "Absolutely. Admin controls let you invite, onboard, or remove team members and manage channels easily." },
      { question: "Does ChatNest support group conversations?", answer: "Yes. Use channels or direct messages for both 1:1 and group chats." },
      { question: "Is there a free plan?", answer: "Yes. ChatNest offers a generous free tier for smaller organizations." },
      { question: "How do I get support?", answer: "Contact us any time via email, or use in-app support features." },
    ],
  },

  footer: {
    brandName: "ChatNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "#" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Get Support", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://chatnest.com/docs" },
        ],
      },
    ],
    // Use [Year] for current year as per the request; will render as © 2026 ChatNest. All rights reserved.
    copyright: `© ${new Date().getFullYear()} ChatNest. All rights reserved.`,
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "ChatNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "ChatNest preview" },
    features: [
      { title: "Real-Time Messaging", description: "Direct messages, channels, and notifications for everyone." },
      { title: "Organized Collaboration", description: "Channels, searchable history, and secure communication." },
      { title: "Easy Setup", description: "Quick onboarding for teams and admins—no friction." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya/chatnest", ariaLabel: "View ChatNest on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}