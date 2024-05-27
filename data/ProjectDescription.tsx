export type ProjectDescriptionProps = {
    name: string;
    logo: string;
    description: string;
    slug: string;
    projectUrl: string;
    coverImage: string;
};

export const ProjectDescription: ProjectDescriptionProps[] = [
    {
        name: 'NoteMe App',
        logo: '/icons/noteme.png',
        description: 'A blog posting app similar to Medium, not that fancy yet. Built using Next.js, Hono, Cloudflare Workers, Edge runtime',
        slug: 'noteme-app',
        projectUrl: "https://noteme.ajaymandal.me/",
        coverImage: '/projectCover/noteme.png'
    },
    {
        name: 'Youtube Clone',
        logo: '/icons/yt.svg',
        description: 'Youtube-clone using Next.js, FIrebase and Google Cloud, heavily focused on Video upload Feature',
        slug: 'youtube-clone',
        projectUrl: "https://youtube-clone.ajaymandal.me/",
        coverImage: '/projectCover/yt.png'
    },
    {
        name: 'Summarease AI',
        logo: '/icons/summ.ico',
        description: 'React app that use RapidAPI based on GPT-4 to summarize the url provide and output a descriptive summary',
        slug: 'summarease-ai',
        projectUrl: "https://summarease-ai.netlify.app/",
        coverImage: '/projectCover/summarize.png'
    },
    {
        name: 'TraxPack',
        logo: '/icons/traxpack.png',
        description: 'UI Interface for luggage tracking system, utilizing auth.js for authentication and Next.js for frontend',
        slug: 'traxpack-app',
        projectUrl: "https://traxpack.ajaymandal.me/",
        coverImage: '/projectCover/traxpack.png'
    }
]
