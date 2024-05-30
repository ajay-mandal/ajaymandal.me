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
        jobTitle: "Intern",
        startDate: "2024-04-29",
        endDate: "",
        description: "I am working as a Project Trainee at Kyndryl. Kyndryl has its own set of internal tools to operate and I am getting hands-on experience with them.",
    },

]
