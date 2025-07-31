export type JobProps = {
    id: string;
    name: string;
    url: string;
    logo: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
};


export const JOBS: JobProps[] = [
    {
        id: "juteq",
        name: "JUTEQ Inc",
        url: "https://juteq.ca/",
        logo: "/juteq.jpeg",
        jobTitle: "Backend Engineer",
        startDate: "2025-06",
        endDate: "",
        description: `Developing AI Platforms for automotive dealership customer engagement system using NestJS and Prisma ORM. 
        Building scalable backend APIs for orchestrating specialized AI agents. Implementing multi-channel communication systems for
        email/SMS customer interactions and real-time lead management. Working with Google Cloud infrastructure including Cloud Run,
        Vertex AI, and BullMQ for automated automotive sales workflows.`,
    },
    {
        id: "klyra",
        name: "Klyra Innovations",
        url: "https://klyra.co.in/",
        logo: "/klyra_1.png",
        jobTitle: "Full-Stack Engineer",
        startDate: "2025-01",
        endDate: "2025-02",
        description: `Developed the MVP mobile design using React.js and Tailwind CSS, integrating user authentication and email verification with Clerk.
        Engineered a scalable FastAPI backend to handle high-concurrency user requests efficiently.
        Built the organization’s SEO-optimized website using Next.js, React, and TypeScript in collaboration with senior developers.`,
    },
    {
        id: "kyndryl",
        name: "Kyndryl",
        url: "https://www.kyndryl.com/in/en",
        logo: "/KD.svg",
        jobTitle: "Project Intern",
        startDate: "2024-04",
        endDate: "2024-07",
        description: `Proactively assisted seniors to enhance service delivery and improve Python scripts.
        Worked with Azure and SQL for data accumulation and visualization.
        Kept projects on track by supporting project managers with progress reports, docs, and more.
        Used analytic tools such as Aternity and Jamf to monitor and manage devices and resolve issues.`,
    }

]
