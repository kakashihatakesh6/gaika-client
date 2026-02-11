import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/mockData";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    blog: BlogPost;
}

export function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blog/${blog.slug}`} className="group block h-full">
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {blog.category}
                    </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                        {blog.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-medium text-sm mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
