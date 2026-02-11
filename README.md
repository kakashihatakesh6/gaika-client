# Giakaa Clone - Frontend

A modern, production-grade Next.js frontend for the Giakaa Clone & CMS project.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at **http://localhost:3000**

## 📋 Prerequisites

- Node.js 18+ 
- Backend server running on port 5000 (see `/server` directory)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **UI Components**: Custom components with Radix UI primitives

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # CMS admin panel
│   ├── blog/              # Blog listing & detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── features/          # Feature components (HeroSlider, BlogCard)
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # Reusable UI components (Button)
├── lib/
│   ├── api.ts             # Axios instance
│   ├── utils.ts           # Utility functions
│   └── mockData.ts        # Mock data for development
└── hooks/                 # Custom React hooks
```

## 🎨 Features

- ✅ Responsive landing page with interactive hero slider
- ✅ Blog listing and detail pages
- ✅ Admin panel for content management
- ✅ Dark theme with custom Tailwind configuration
- ✅ API integration ready (proxied to backend)
- ✅ SEO-friendly with dynamic metadata
- ✅ Type-safe with TypeScript

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend Connection

The app is configured to proxy API requests to `http://localhost:5000/api` via Next.js rewrites in `next.config.ts`.

## 📝 Available Routes

- `/` - Landing page
- `/blog` - Blog listing
- `/blog/[slug]` - Blog detail page
- `/admin` - Admin dashboard
- `/admin/blogs` - Blog management
- `/admin/hero` - Hero slider management

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run E2E tests (when implemented)
npm run test:e2e
```

## 📦 Build & Deploy

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new files
3. Follow the component naming conventions
4. Test your changes before committing

## 📄 License

This project is part of the Giakaa Clone & CMS application.
