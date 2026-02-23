export type Metric = {
  value: string;
  label: string;
};

export type ProjectProps = {
  name: string;
  tagline: string;
  blogLink?: string;
  github: string;
  live?: string;
  category: string;
  year: string;
  stack: string[];
  metrics?: Metric[];
};


export const PROJECT: ProjectProps[] = [
    {
        name: 'DryMDF',
        tagline: 'Production-grade Markdown-to-PDF platform with Next.js and NestJS. Features a rich editor, live PDF preview, async export, Mermaid diagrams, and scalable job queue — engineered for high-quality document workflows.',
        github: 'https://github.com/ajay-mandal/DryMDF',
        category: 'FULL-STACK',
        year: '2026',
        stack: ['NEXT.JS', 'NESTJS', 'REDIS', 'TAILWIND', 'CODEMIRROR', 'BULL', 'SOCKET.IO', 'PUPPETEER'],
        metrics: [
            { value: 'Markdown', label: 'EDITOR' },
            { value: 'PDF/HTML', label: 'EXPORT' },
            { value: 'Mermaid', label: 'DIAGRAMS' },
            { value: 'Live', label: 'PREVIEW' },
        ],
    },
 {
        name: 'Youtube Clone',
        tagline: 'Full-stack video platform built with Next.js, Firebase, and Google Cloud. Features chunked video uploads, adaptive streaming, user authentication, and a recommendation feed — engineered to handle large media pipelines at scale.',
        blogLink: 'https://blogs-ajaymandal.netlify.app/posts/youtube-clone-backend/',
        github: 'https://github.com/ajay-mandal/youtube-clone',
        category: 'BACKEND',
        year: '2024',
        stack: ['NEXT.JS', 'FIREBASE', 'GOOGLE CLOUD', 'FFMPEG'],
    },
    {
        name: 'NoteMe App',
        tagline: 'Edge-native blog publishing platform powered by Next.js, Hono, and Cloudflare Workers. Delivers sub-50ms response times globally with zero cold starts, Markdown rendering, and a clean authoring experience.',
        blogLink: 'https://blogs-ajaymandal.netlify.app/posts/noteme-app/',
        github: 'https://github.com/ajay-mandal/NoteMe-App',
        live: 'https://noteme-app-ajaymandal.vercel.app/',
        category: 'EDGE PLATFORM',
        year: '2024',
        stack: ['NEXT.JS', 'HONO.JS', 'CF WORKERS', 'EDGE RUNTIME'],
    },
    {
        name: 'E-Commerce and Admin Dashboard',
        tagline: 'Production-grade e-commerce system with a decoupled storefront and a custom admin dashboard. Built on Next.js, Typescript, and PostgreSQL — with Stripe integration, real-time order tracking, analytics, and full product lifecycle management.',
        github: 'https://github.com/ajay-mandal/cms_ecommerce_store',
        live: 'https://cms-ecommerce-store.vercel.app/',
        category: 'E-COMMERCE',
        year: '2025',
        stack: ['NEXT.JS', 'PRISMA ORM', 'POSTGRES', 'STRIPE', 'ZUSTAND', 'TAILWINDCSS'],
    }
]
