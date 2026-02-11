"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit } from "lucide-react";
import { getBlogs, deleteBlog } from "@/lib/services";
import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const data = await getBlogs();
            setBlogs(data);
        } catch (error) {
            console.error("Failed to load blogs", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlog(id);
                loadBlogs();
            } catch (error) {
                console.error("Failed to delete blog", error);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Blogs</h1>
                <Link href="/admin/blogs/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" /> New Blog
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-10">Loading...</div>
            ) : blogs.length === 0 ? (
                <div className="border border-border rounded-lg p-8 text-center text-muted-foreground bg-muted/20">
                    No blogs found. Create your first blog post.
                </div>
            ) : (
                <div className="grid gap-4">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="flex items-center justify-between bg-card p-4 rounded-lg border border-border">
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                                    {blog.featuredImage ? (
                                        <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">No Img</div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold line-clamp-1">{blog.title}</h3>
                                    <p className="text-sm text-muted-foreground font-mono">{blog.slug}</p>
                                    <div className="flex gap-2 mt-1">
                                        <span className={`text-xs px-2 py-0.5 rounded ${blog.status === 'published' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                            {blog.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(blog._id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
