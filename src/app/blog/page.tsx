import { BlogCard } from "@/components/features/BlogCard";
import { mockBlogs } from "@/lib/mockData";

export default function BlogListingPage() {
    return (
        <div className="bg-background min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h1>
                    <p className="text-muted-foreground text-lg">
                        Explore our thoughts on technology, innovation, and digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}
