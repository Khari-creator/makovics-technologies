export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why Custom Software Gives Businesses a Competitive Edge",
    slug: "custom-software-competitive-edge",
    excerpt:
      "Off-the-shelf software doesn’t always fit business needs. Learn why custom-built systems provide long-term advantages.",
    date: "2025-01-10",
    content: [
      "Many businesses rely on generic software solutions that only partially address their operational needs.",
      "Custom software is built specifically for your workflows, reducing inefficiencies and manual work.",
      "It provides scalability, security, and full control over features and data.",
      "In the long run, custom systems offer better ROI and competitive advantage."
    ],
  },
  {
    title: "Key Features Every Modern POS System Should Have",
    slug: "modern-pos-system-features",
    excerpt:
      "A POS system is more than checkout. Discover the essential features that modern businesses need.",
    date: "2025-01-18",
    content: [
      "Modern POS systems integrate inventory, reporting, and customer management.",
      "Real-time analytics help businesses make faster decisions.",
      "Offline mode ensures continuity during network downtime.",
      "Security and user role management are critical for accountability."
    ],
  },
];
