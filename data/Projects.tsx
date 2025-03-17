export type ProjectProps = {
  name: string;
  logo: string;
  tagline: string;
  blogLink?: string;
  github: string;
  live: string;
};


export const PROJECT: ProjectProps[] = [
    {
        name: 'NoteMe App',
        logo: '/icons/noteme.png',
        tagline: 'A blog posting app built using Next.js, Hono, Cloudflare Workers, Edge runtime',
        blogLink: 'https://blogs.ajaymandal.me/posts/noteme-app/',
        github: 'https://github.com/ajay-mandal/NoteMe-App',
        live: 'https://noteme-app-ajaymandal.vercel.app/'
    },
    {
        name: 'Youtube Clone',
        logo: '/icons/yt.svg',
        tagline: 'Youtube-clone using Next.js, FIrebase and Google Cloud, heavily focused on Video upload Feature',
        blogLink: 'https://blogs.ajaymandal.me/posts/youtube-clone-backend/',
        github: 'https://github.com/ajay-mandal/youtube-clone',
        live: 'https://youtube-ajaymandal.vercel.app/'
    },
    {
        name: 'Summarease AI',
        logo: '/icons/summ.ico',
        tagline: 'App that use RapidAPI based on GPT-4 to summarize the url provide and output a descriptive summary',
        github: 'https://github.com/ajay-mandal/Summarizer_AI_ReactApp',
        live: 'https://summarease-ai.netlify.app/'
    },
    {
        name: 'Auth v5',
        logo: '/icons/authjs.png',
        tagline: 'In-house authentication solution for my any next.js project built using Auth.js with route protection.',
        github: 'https://github.com/ajay-mandal/Auth_toolkit',
        live: 'https://auth5-ajaymandal.vercel.app/',
        blogLink: 'https://blogs.ajaymandal.me/posts/inhouse-authentication-using-authjs/',
    },
    {
        name: 'CMS E-Commerce',
        logo: '/icons/store.svg',
        tagline: 'E-Commerce platform to view products and make purchases using Stripe',
        github: 'https://github.com/ajay-mandal/cms_ecommerce_store',
        live: 'https://cms-ecommerce-store.vercel.app/'
    },
    {
        name: 'CMS Admin',
        logo: '/icons/cms-admin.svg',
        tagline: 'CMS admin panel to manage different stores at single place and track orders',
        blogLink: 'https://blogs.ajaymandal.me/',
        github: 'https://github.com/ajay-mandal/cms_admin',
        live: 'https://cms-admin-weld.vercel.app/'
    }
]
