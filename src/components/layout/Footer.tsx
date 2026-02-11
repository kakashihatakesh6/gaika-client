import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            Giakaa
                        </span>
                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            We empower enterprises to compete with industry giants by delivering world-class technology solutions.
                        </p>
                    </div>

                    {/* Columns... simplified for now */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About</Link></li>
                            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services/ai" className="hover:text-primary">AI Solutions</Link></li>
                            <li><Link href="/services/web" className="hover:text-primary">Web Development</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                            <li><Link href="/linkedin" className="hover:text-primary">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Giakaa. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
