"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit } from "lucide-react";
import { getHeroes, deleteHero } from "@/lib/services";
import { Hero } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function AdminHeroPage() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadHeroes();
    }, []);

    const loadHeroes = async () => {
        try {
            const data = await getHeroes();
            setHeroes(data);
        } catch (error) {
            console.error("Failed to load heroes", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this slide?")) {
            try {
                await deleteHero(id);
                loadHeroes();
            } catch (error) {
                console.error("Failed to delete hero", error);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Hero Slider</h1>
                <Link href="/admin/hero/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" /> New Slide
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-10">Loading...</div>
            ) : heroes.length === 0 ? (
                <div className="border border-border rounded-lg p-8 text-center text-muted-foreground bg-muted/20">
                    No slides found. Create your first hero slide.
                </div>
            ) : (
                <div className="grid gap-4">
                    {heroes.map((hero) => (
                        <div key={hero._id} className="flex items-center justify-between bg-card p-4 rounded-lg border border-border">
                            <div className="flex items-center gap-4">
                                <div className="relative w-24 h-16 bg-muted rounded overflow-hidden">
                                    {hero.mediaUrl && (
                                        <Image src={hero.mediaUrl} alt={hero.title} fill className="object-cover" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold">{hero.title}</h3>
                                    <p className="text-sm text-muted-foreground truncate max-w-md">{hero.description}</p>
                                    <div className="flex gap-2 mt-1">
                                        {hero.isActive && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded">Active</span>}
                                        <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded">Order: {hero.displayOrder}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(hero._id)}>
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
