import { getBlogBySlug } from "@/lib/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage(props: PageProps) {
    const params = await props.params;

    let blog;
    try {
        blog = await getBlogBySlug(params.slug);
    } catch (error) {
        notFound();
    }

    if (!blog) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                    src={blog.featuredImage || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"} // Fallback image
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <div className="max-w-4xl space-y-4">
                        <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                            {blog.category || "General"}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-gray-300 text-sm md:text-base mt-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Giakaa Editorial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime || "5 min read"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-xl max-w-4xl mx-auto border border-border">

                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Link>

                    <div className="prose prose-lg max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground 
                        prose-p:text-muted-foreground prose-p:leading-relaxed 
                        prose-strong:text-foreground 
                        prose-li:text-muted-foreground
                        prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary/80 transition-colors
                        prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-muted-foreground
                        prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-border
                        prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-pre:text-foreground
                        ">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {blog.content}
                        </ReactMarkdown>
                    </div>

                    {/* Share/CTA */}
                    <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Share this article</span>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">LinkedIn</Button>
                            <Button variant="outline" size="sm">Twitter</Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
