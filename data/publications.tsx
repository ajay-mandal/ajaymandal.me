export type PublicationProps = {
    name: string;
    description: string;
    link: string;
    tagline: string;
    date: string;
    image: string;
  };
  
  
  export const PUBLICATIONS: PublicationProps[] = [
    {
    name: "AWS Serverless Luggage Tracking System Integrating IoT",
    description: 'Authors: Ajay Kumar Mandal, P. Yadav, A. Maharjan, C. Rai, and B. D.R\n\nPublished in 2024 2nd International Conference on Networking, Embedded and Wireless Systems (ICNEWS), Bangalore, India, August 2024. This paper presents a cloud-native solution designed to replace legacy RFID-based luggage tracking systems with a modern AWS serverless architecture.\n\nStatus: Published in IEEE Xplore | DOI: 10.1109/ICNEWS60873.2024.10730973',
    link: 'https://ieeexplore.ieee.org/document/10730973',
    tagline: "IEEE XPLORE",
    date: "AUG 2024",
    image: '/edu/ieee-certificate.png'
    },
]
  