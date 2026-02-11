import { mockBlogs } from "@/lib/mockData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage(props: PageProps) {
    const params = await props.params;
    const blog = mockBlogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <div className="max-w-4xl space-y-4">
                        <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                            {blog.category}
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
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
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

                    <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                        <p className="lead text-xl text-muted-foreground font-medium mb-8">
                            {blog.excerpt}
                        </p>
                        <div className="space-y-6 text-gray-300">
                            <p>
                                In today's rapidly evolving digital landscape, staying ahead of the curve is no longer just an advantage—it's a necessity. This article explores the transformative power of {blog.category} and how it is reshaping industries worldwide.
                            </p>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Understanding the core principles of modern digital transformation.</li>
                                <li>Leveraging data-driven insights for strategic decision making.</li>
                                <li>Overcoming common challenges in large-scale implementation.</li>
                            </ul>
                            <p>
                                As we continue to push the boundaries of what's possible, organizations must adapt their strategies to leverage these new technologies effectively. The future belongs to those who are willing to innovate and embrace change.
                            </p>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                            <p>
                                The journey towards digital excellence is ongoing. By adopting a proactive approach and partnering with the right experts, your organization can potential unlock new opportunities and drive sustainable growth.
                            </p>
                        </div>
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
