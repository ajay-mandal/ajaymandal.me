export type ProjectProps = {
  name: string;
  logo: string;
  tagline: string;
  blogLink: string;
  github: string;
  live: string;
};


export const PROJECT: ProjectProps[] = [
    {
        name: 'NoteMe App',
        logo: '/icons/noteme.png',
        tagline: 'A blog posting app similar to Medium, not that fancy yet. Built using Next.js, Hono, Cloudflare Workers, Edge runtime',
        blogLink: 'https://blogs.ajaymandal.me/posts/noteme-app/',
        github: 'https://github.com/ajay-mandal/NoteMe-App',
        live: 'https://noteme.ajaymandal.me/'
    },
    {
        name: 'Youtube Clone',
        logo: '/icons/yt.svg',
        tagline: 'Youtube-clone using Next.js, FIrebase and Google Cloud, heavily focused on Video upload Feature',
        blogLink: 'https://blogs.ajaymandal.me/posts/youtube-clone-backend/',
        github: 'https://github.com/ajay-mandal/youtube-clone',
        live: 'https://youtube-clone.ajaymandal.me/'
    },
    {
        name: 'Summarease AI',
        logo: '/icons/summ.ico',
        tagline: 'React app that use RapidAPI based on GPT-4 to summarize the url provide and output a descriptive summary',
        blogLink: 'https://blogs.ajaymandal.me/',
        github: 'https://github.com/ajay-mandal/Summarizer_AI_ReactApp',
        live: 'https://summarease-ai.netlify.app/'
    },
    {
        name: 'TraxPack',
        logo: '/icons/traxpack.png',
        tagline: 'UI Interface for luggage tracking system, utilizing auth.js for authentication and Next.js for frontend',
        blogLink: 'https://blogs.ajaymandal.me/',
        github: 'https://github.com/ajay-mandal/AWS-Serverless-Luggage-Tracking-System',
        live: 'https://traxpack.ajaymandal.me/'
    },
    {
        name: 'CMS E-Commerce',
        logo: '/icons/store.svg',
        tagline: 'UI Interface for luggage tracking system, utilizing auth.js for authentication and Next.js for frontend',
        blogLink: 'https://blogs.ajaymandal.me/',
        github: 'https://github.com/ajay-mandal/cms_ecommerce_store',
        live: 'https://cms-ecommerce-store.vercel.app/'
    },
    {
        name: 'CMS Admin',
        logo: '/icons/cms-admin.svg',
        tagline: 'UI Interface for luggage tracking system, utilizing auth.js for authentication and Next.js for frontend',
        blogLink: 'https://blogs.ajaymandal.me/',
        github: 'https://github.com/ajay-mandal/cms_admin',
        live: 'https://cms-admin-weld.vercel.app/'
    }
]
