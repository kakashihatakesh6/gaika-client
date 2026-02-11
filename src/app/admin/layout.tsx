import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutDashboard, FileText, Image as ImageIcon, Settings } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card">
                <div className="p-6">
                    <h2 className="text-xl font-bold">Giakaa CMS</h2>
                </div>
                <nav className="p-4 space-y-2">
                    <Link href="/admin">
                        <Button variant="ghost" className="w-full justify-start">
                            <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                        </Button>
                    </Link>
                    <Link href="/admin/blogs">
                        <Button variant="ghost" className="w-full justify-start">
                            <FileText className="w-4 h-4 mr-2" /> Blogs
                        </Button>
                    </Link>
                    <Link href="/admin/hero">
                        <Button variant="ghost" className="w-full justify-start">
                            <ImageIcon className="w-4 h-4 mr-2" /> Hero Slider
                        </Button>
                    </Link>
                    <Link href="/admin/settings">
                        <Button variant="ghost" className="w-full justify-start">
                            <Settings className="w-4 h-4 mr-2" /> Settings
                        </Button>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="bg-card rounded-lg border border-border p-6 min-h-[500px]">
                    {children}
                </div>
            </main>
        </div>
    );
}
