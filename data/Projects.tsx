export type ProjectProps = {
  name: string;
  logo: string;
  tagline: string;
  slug: string;
  coverImage: string;
};


export const PROJECT: ProjectProps[] = [
    {
        name: 'NoteMe App',
        logo: '/icons/noteme.png',
        tagline: 'A blog posting app similar to Medium, not that fancy yet. Built using Next.js, Hono, Cloudflare Workers, Edge runtime',
        slug: 'noteme-app',
        coverImage: '/projectCover/noteme.png'
    },
    {
        name: 'Youtube Clone',
        logo: '/icons/yt.svg',
        tagline: 'Youtube-clone using Next.js, FIrebase and Google Cloud, heavily focused on Video upload Feature',
        slug: 'youtube-clone',
        coverImage: '/projectCover/yt.png'
    },
    {
        name: 'Summarease AI',
        logo: '/icons/summ.ico',
        tagline: 'React app that use RapidAPI based on GPT-4 to summarize the url provide and output a descriptive summary',
        slug: 'summarease-ai',
        coverImage: '/projectCover/summarize.png'
    },
    {
        name: 'TraxPack',
        logo: '/icons/traxpack.png',
        tagline: 'UI Interface for luggage tracking system, utilizing auth.js for authentication and Next.js for frontend',
        slug: 'traxpack-app',
        coverImage: '/projectCover/traxpack.png'
    }
]
