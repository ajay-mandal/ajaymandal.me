import Image from "next/image";
import Link from "next/link";
import { Slide } from "../animations/Slide";
import EmptyState from "../animations/EmptyState";
import { PROJECT } from "@/data/Projects";
import { ProjectWobble } from "../animations/project-wobbler";


export default async function Project() {

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <h1 className=" md:text-5xl text-center font-incognito font-semibold tracking-tight sm:text-5xl text-4xl lg:leading-tight basis-1/2 mb-8">
        Projects
      </h1>
      <p className="w-full text-base text-zinc-400 leading-relaxed text-center flex justify-center py-5">
          I&apos;ve worked on these few projects over the years. All of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
        </p>
      <Slide delay={0.1}>
        {PROJECT.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {PROJECT.map((project) => (
              <ProjectWobble
                key={project.slug}
                >
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="flex items-center gap-x-4 bg-primary-bg border border-transparent p-4"
              >
                <Image
                  src={project.logo}
                  width={50}
                  height={50}
                  alt={project.name}
                  className="bg-zinc-800 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                  <div className="text-sm text-zinc-400">
                    {project.tagline}
                  </div>
                </div>
              </Link>
              </ProjectWobble>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
