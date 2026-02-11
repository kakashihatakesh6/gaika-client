export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
}

export const mockBlogs: BlogPost[] = [
    {
        id: "1",
        title: "The Future of AI in Enterprise: Beyond the Hype",
        excerpt: "Discover how large-scale organizations are moving from AI experiments to production-grade implementations that drive real business value.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        category: "AI Strategy",
        slug: "future-of-ai-enterprise",
    },
    {
        id: "2",
        title: "Scaling Microservices with Kubernetes",
        excerpt: "Best practices for managing complex microservices architectures and ensuring high availability in high-traffic environments.",
        image: "https://images.unsplash.com/photo-1667372393119-c81c0cda1a89?auto=format&fit=crop&q=80&w=800",
        date: "Oct 08, 2025",
        readTime: "8 min read",
        category: "DevOps",
        slug: "scaling-microservices-k8s",
    },
    {
        id: "3",
        title: "Data Sovereignty in the Cloud Age",
        excerpt: "Navigating the complex landscape of data privacy regulations and ensuring your cloud infrastructure remains compliant.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        date: "Sep 28, 2025",
        readTime: "6 min read",
        category: "Security",
        slug: "data-sovereignty-cloud",
    },
];
