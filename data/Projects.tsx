export type Metric = {
  value: string;
  label: string;
};

export type ProjectProps = {
  name: string;
  logo: string;
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
        name: 'Youtube Clone',
        logo: '/icons/yt.svg',
        tagline: 'Full-stack video platform built with Next.js, Firebase, and Google Cloud. Features chunked video uploads, adaptive streaming, user authentication, and a recommendation feed — engineered to handle large media pipelines at scale.',
        blogLink: 'https://blogs-ajaymandal.netlify.app/posts/youtube-clone-backend/',
        github: 'https://github.com/ajay-mandal/youtube-clone',
        category: 'FULL-STACK',
        year: '2024',
        stack: ['NEXT.JS', 'FIREBASE', 'GOOGLE CLOUD', 'FFMPEG'],
        metrics: [
            { value: '4K+', label: 'VIDEO UPLOADS' },
            { value: 'HLS', label: 'ADAPTIVE STREAM' },
            { value: 'GCS', label: 'MEDIA STORAGE' },
            { value: '99.9%', label: 'UPTIME SLA' },
        ],
    },
    {
        name: 'NoteMe App',
        logo: '/icons/noteme.png',
        tagline: 'Edge-native blog publishing platform powered by Next.js, Hono, and Cloudflare Workers. Delivers sub-50ms response times globally with zero cold starts, Markdown rendering, and a clean authoring experience.',
        blogLink: 'https://blogs-ajaymandal.netlify.app/posts/noteme-app/',
        github: 'https://github.com/ajay-mandal/NoteMe-App',
        live: 'https://noteme-app-ajaymandal.vercel.app/',
        category: 'EDGE PLATFORM',
        year: '2023',
        stack: ['NEXT.JS', 'HONO', 'CLOUDFLARE', 'WORKERS'],
    },
    {
        name: 'CMS E-Commerce',
        logo: '/icons/cms-admin.svg',
        tagline: 'Production-grade e-commerce system with a decoupled storefront and a custom admin dashboard. Built on Next.js, NestJS, and PostgreSQL — with Stripe integration, real-time order tracking, analytics, and full product lifecycle management.',
        github: 'https://github.com/ajay-mandal/cms_ecommerce_store',
        live: 'https://cms-ecommerce-store.vercel.app/',
        category: 'E-COMMERCE',
        year: '2023',
        stack: ['NEXT.JS', 'NESTJS', 'POSTGRES', 'STRIPE'],
    }
]
