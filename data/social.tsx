import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
  BiLogoDocker
} from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";

import Image from "next/image";

const CustomLogo = () => (
  <Image src="/logo-dark.png" alt="Custom Logo" width={24} height={24} style={{ filter: 'brightness(0.5)' }} />
);
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/ajay-mandal",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "X",
    url: "https://x.com/ajaymandal01",
    icon: FaSquareXTwitter,
    status: "social",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://linkedin.com/in/ajay-mandal",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 4,
    name: "Youtube",
    url: "https://youtube.com/@zexa_yt",
    icon: BiLogoYoutube,
    status: "social",
  },
  {
    id: 5,
    name: "Docker",
    url: "https://hub.docker.com/u/lordzexa",
    icon: BiLogoDocker,
    status: "social",
  },
  {
    id: 6,
    name: "My Blogs",
    url: "https://blogs-ajaymandal.netlify.app",
    icon: CustomLogo,
    status: "social",
  },
];
