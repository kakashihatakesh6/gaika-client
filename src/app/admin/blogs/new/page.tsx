"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/lib/services";
import { Blog } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewBlogPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Partial<Blog>>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Partial<Blog>) => {
        setLoading(true);
        try {
            await createBlog({ ...data, status: 'published' }); // Default to published for simplicity
            router.push("/admin/blogs");
            router.refresh();
        } catch (error) {
            console.error("Failed to create blog", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/blogs">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">Create New Blog</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg border border-border">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input {...register("title", { required: "Title is required" })} placeholder="Enter blog title" />
                    {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Slug (Optional)</label>
                        <Input {...register("slug")} placeholder="auto-generated-from-title" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Featured Image URL</label>
                        <Input {...register("featuredImage")} placeholder="https://..." />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Content (Markdown)</label>
                    <Textarea
                        {...register("content", { required: "Content is required" })}
                        placeholder="Write your blog content here..."
                        className="min-h-[300px] font-mono"
                    />
                    {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Meta Title</label>
                        <Input {...register("seo.meta_title")} placeholder="SEO Title" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Meta Description</label>
                        <Input {...register("seo.meta_description")} placeholder="SEO Description" />
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Link href="/admin/blogs">
                        <Button type="button" variant="ghost">Cancel</Button>
                    </Link>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Blog"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
