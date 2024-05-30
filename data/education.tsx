export type EducationProps = {
    id: string;
    name: string;
    url: string;
    logo: string;
    startDate: string;
    endDate: string;
    description: string;
    CGPA: string;
};


export const EDUCATIONS: EducationProps[] = [
    {
        id: "JGI",
        name: "Jain University",
        url: "https://www.jainuniversity.ac.in/",
        logo: "/edu/FET-Logo.png",
        startDate: "Oct 2020",
        endDate: "May 2024",
        description: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering at Jain (Deemed-to-be University), Bengaluru",
        CGPA: "CGPA 8.8"
    },
    {
        id: "KTM",
        name: "Kathmandu Model Higher Secondary School",
        url: "https://ktmmodelcollege.edu.np/",
        logo: "/edu/kmc.png",
        startDate: "Mar 2018",
        endDate: "Apr 2020",
        description: "I completed my Higher Studies in Mathematics and Computer Science at Kathmandu Model College, Bag bazar, Nepal",
        CGPA: "GPA 3.39"
    },
    {
        id: "MTPS",
        name: "Mother Teresa Public School",
        url: "https://www.facebook.com/mtpsjanakpur",
        logo: "/edu/mtps.jpeg",
        startDate: "2009",
        endDate: "2018",
        description: "I completed my Primary Education at Mother Teresa Public School, Janakpur, Nepal",
        CGPA: "GPA 3.70"
    },

]
