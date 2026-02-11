import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    blog: Blog;
}

// Helper function to format date
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Helper function to calculate read time based on content length
const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
};

// Helper function to generate excerpt from content
const generateExcerpt = (content: string, maxLength: number = 160): string => {
    const plainText = content.replace(/<[^>]*>/g, ''); // Remove HTML tags if any
    return plainText.length > maxLength
        ? plainText.substring(0, maxLength) + '...'
        : plainText;
};

export function BlogCard({ blog }: BlogCardProps) {
    const formattedDate = formatDate(blog.createdAt);
    const readTime = blog.readTime || calculateReadTime(blog.content);
    const excerpt = generateExcerpt(blog.content);
    const category = blog.category || 'General';
    const image = blog.featuredImage || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800';

    return (
        <Link href={`/blog/${blog.slug}`} className="group block h-full">
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {category}
                    </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{readTime}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                        {excerpt}
                    </p>

                    <div className="flex items-center text-primary font-medium text-sm mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
