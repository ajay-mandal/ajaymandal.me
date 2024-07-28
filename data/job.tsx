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
        id: "kyndryl",
        name: "Kyndryl",
        url: "https://www.kyndryl.com/in/en",
        logo: "/KD.svg",
        jobTitle: "Project Intern",
        startDate: "2024-04-29",
        endDate: "2024-07-28",
        description: `Proactively assisted seniors to enhance service delivery and improve Python scripts.
        Worked with Azure and SQL for data accumulation and visualization.
        Kept projects on track by supporting project managers with progress reports, docs, and more.
        Used analytic tools such as Aternity and Jamf to monitor and manage devices and resolve issues.`,
    },

]
