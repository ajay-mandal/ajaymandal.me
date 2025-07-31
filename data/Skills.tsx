import {
    BashIcon,
    ExpressIcon,
    JavascriptIcon,
    MongoIcon,
    NextIcon,
    PostgresIcon,
    ReactIcon,
    RedisIcon,
    TailwindIcon,
    TypescriptIcon,
    FirebaseIcon,
    DockerIcon,
    GitIcon,
    PythonIcon,
    HonoIcon,
    PrismaIcon,
    AuthIcon,
    AwsIcon,
    GcpIcon,
    KafkaIcon,
    ZodIcon,
    CFIcon,
    K8sIcon
} from '@/components/icons';
import { NestJSIcon } from '@/components/icons/nestjs';

import { JSX } from 'react';


export type SkillProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};


export const LANGUAGES: SkillProps[] = [
    {
        name: 'Javascript',
        icon: <JavascriptIcon />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        name: 'Typescript',
        icon: <TypescriptIcon />,
        link: 'https://www.typescriptlang.org/',
    },
    {
        name: 'Python',
        icon: <PythonIcon />,
        link: 'https://www.python.org/',
    },
    {
        name: 'Bash',
        icon: <BashIcon />,
        link: 'https://www.gnu.org/software/bash/',
    }
]

export const FRAMEWORKS: SkillProps[] = [
    {
        name: 'React',
        icon: <ReactIcon />,
        link: 'https://reactjs.org/'
    },
    {
        name: 'Nextjs',
        icon: <NextIcon />,
        link: 'https://nextjs.org/'
    },
    {
        name: 'Tailwindcss',
        icon: <TailwindIcon />,
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'Zod',
        icon: <ZodIcon />,
        link: 'https://zod.dev/'
    },
    {
        name: 'Express',
        icon: <ExpressIcon />,
        link: 'https://expressjs.com/'
    },
    {
        name: 'Hono',
        icon: <HonoIcon />,
        link: 'https://hono.dev/'
    },
        {
        name: 'NestJS',
        icon: <NestJSIcon />,
        link: 'https://nestjs.com/'
    }
]

export const DATABASES: SkillProps[] = [
    {
        name: 'MongoDB',
        icon: <MongoIcon />,
        link: 'https://www.mongodb.com/'
    },
    {
        name: 'PostgresSQL',
        icon: <PostgresIcon />,
        link: 'https://www.postgresql.org/'
    },
    {
        name: 'Firebase',
        icon: <FirebaseIcon />,
        link: 'https://firebase.google.com/'
    },
    {
        name: 'Prisma',
        icon: <PrismaIcon />,
        link: 'https://www.prisma.io/'
    }
]

export const DEVOPS: SkillProps[] = [
    {
        name: 'Docker',
        icon: <DockerIcon />,
        link: 'https://www.docker.com/'
    },
    {
        name: 'Kubernetes',
        icon: <K8sIcon />,
        link: 'https://kubernetes.io/'
    },
    {
        name: 'Git',
        icon: <GitIcon />,
        link: 'https://git-scm.com/'
    },
    {
        name: 'AWS',
        icon: <AwsIcon />,
        link: 'https://aws.amazon.com/'
    },
    {
        name: 'GCP',
        icon: <GcpIcon />,
        link: 'https://cloud.google.com/'
    },
    {
        name: 'Cloudflare',
        icon: <CFIcon />,
        link: 'https://www.cloudflare.com/'
    }
]
