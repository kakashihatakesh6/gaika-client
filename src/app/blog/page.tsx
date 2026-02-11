"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "@/components/features/BlogCard";
import { getBlogs } from "@/lib/services";
import { Blog } from "@/types";

export default function BlogListingPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getBlogs();
            // Filter to show only published blogs
            const publishedBlogs = data.filter(blog => blog.status === 'published');
            setBlogs(publishedBlogs);
        } catch (error) {
            console.error("Failed to load blogs", error);
            setError("Failed to load blogs. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h1>
                    <p className="text-muted-foreground text-lg">
                        Explore our thoughts on technology, innovation, and digital transformation.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-muted-foreground">Loading blogs...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-destructive mb-4">{error}</p>
                        <button
                            onClick={loadBlogs}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No published blogs yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
