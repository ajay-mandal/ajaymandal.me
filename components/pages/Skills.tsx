import { LANGUAGES, FRAMEWORKS, DATABASES, DEVOPS} from '@/data/Skills';
import Link from 'next/link';
import { JSX } from 'react';
import { Slide } from '../animations/Slide';

export type SkillProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

function SkillPill(props: SkillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-md border border-cyan-900/90 hover:border-cyan-300 px-4 py-2 text-sm bg-zinc-800/70 sm:text-base md:px-6 md:py-3 md:text-lg">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section className=" py-10 font-incognito">
        <div className="relative mx-auto max-w-7xl">
        <Slide delay={0.14} >
          <h1 className="md:text-5xl text-center font-incognito font-semibold tracking-tight sm:text-5xl text-4xl lg:leading-tight basis-1/2 mb-8">
            Technical Skills
          </h1>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Languages
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-4 text-xl text-zinc-200">
              {LANGUAGES.map(({ icon, name, link }, i) => (
                <SkillPill icon={icon} name={name} key={i} link={link} />
                
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Libraries and Frameworks
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-xl justify-center text-zinc-200">
              {FRAMEWORKS.map(({ icon, name, link }, index) => (
                
                <SkillPill icon={icon} name={name} key={index} link={link}/>
                
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-2xl mx-auto text-center">
              Databases and ORM
            </p>
            <div className="mt-2 flex flex-wrap gap-4 justify-center text-zinc-200">
              {DATABASES.map(({ icon, name, link }, index) => (
                
                    <SkillPill icon={icon} name={name} key={index} link={link} />
                
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="text-2xl font-semibold mx-auto text-center">
              Devops and Tools
            </p>
            <div className="mt-2 flex flex-wrap gap-4 justify-center text-zinc-200">
              {DEVOPS.map(({ icon, name, link }, index) => (
                
                <SkillPill icon={icon} name={name} key={index} link={link}/>
                
              ))}
            </div>
          </div>
          </Slide>
        </div>
      </section>
    </>
  );
}
