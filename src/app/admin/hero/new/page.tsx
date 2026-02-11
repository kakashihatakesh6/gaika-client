"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createHero } from "@/lib/services";
import { Hero } from "@/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewHeroPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Partial<Hero>>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Partial<Hero>) => {
        setLoading(true);
        try {
            await createHero({ ...data, isActive: true, displayOrder: Number(data.displayOrder) || 0 });
            router.push("/admin/hero");
            router.refresh();
        } catch (error) {
            console.error("Failed to create hero", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/hero">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">Create New Slide</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-lg border border-border">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input {...register("title", { required: "Title is required" })} placeholder="Enter slide title" />
                    {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Description (Subtitle)</label>
                    <Textarea {...register("description", { required: "Description is required" })} placeholder="Enter slide subtitle/description" rows={3} />
                    {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">CTA Text</label>
                        <Input {...register("ctaText", { required: "CTA Text is required" })} placeholder="e.g. Get Started" />
                        {errors.ctaText && <p className="text-red-500 text-xs">{errors.ctaText.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">CTA Link</label>
                        <Input {...register("ctaLink", { required: "CTA Link is required" })} placeholder="e.g. /contact" />
                        {errors.ctaLink && <p className="text-red-500 text-xs">{errors.ctaLink.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Display Order</label>
                        <Input type="number" {...register("displayOrder")} defaultValue={0} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Media URL (Image)</label>
                        <Input {...register("mediaUrl", { required: "Media URL is required" })} placeholder="https://..." />
                        {errors.mediaUrl && <p className="text-red-500 text-xs">{errors.mediaUrl.message}</p>}
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Link href="/admin/hero">
                        <Button type="button" variant="ghost">Cancel</Button>
                    </Link>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Slide"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
