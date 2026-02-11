// Hero Types
export interface Hero {
    _id: string;
    title: string;
    description: string;
    mediaUrl: string;
    ctaText: string;
    ctaLink: string;
    displayOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// Blog Types
export interface Blog {
    _id: string;
    title: string;
    slug: string;
    content: string;
    featuredImage?: string;
    status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
    // SEO fields joined from Postgres
    seo?: {
        meta_title?: string;
        meta_description?: string;
        og_tags?: any;
    };
    // Derived fields for UI
    category?: string; // Not in DB yet, but used in UI
    readTime?: string;
}
