import Image from "next/image";
import Link from "next/link";
import { Slide } from "../animations/Slide";
import EmptyState from "../animations/EmptyState";
import { PROJECT } from "@/data/Projects";
import { ProjectWobble } from "../animations/project-wobbler";
import { Button } from "../ui/button";
import { PUBLICATIONS } from "@/data/publications";
import { WobbleCard } from "../animations/wobble-card";
import { BiLinkExternal } from "react-icons/bi";


export default function Publications() {

    //max-w-7xl
  return (
    <main className="w-full h-full">
      <Slide delay={0.1}>
        {PUBLICATIONS.length > 0 ? (
          <section className="flex flex-col gap-y-10">
            {PUBLICATIONS.map((publication) => (
                    <div className="w-full h-full flex flex-col" key={publication.name}>
                        <div className="flex flex-col items-start p-4">
                            <h1 className="text-xl font-incognito font-bold">{publication.name}</h1>
                            <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                                {publication.date} | Publisher : {publication.tagline}
                            </time>
                        </div>
                        <p className="font-sans px-4">{publication.description}</p>
                        <div className="p-4">
                        <div className="aspect-video rounded-none bg-gray-100 relative overflow-hidden">
                            <Image
                            src={publication.image}
                            fill
                            alt="Image"
                            className="aspect-video object-fill rounded-md hover:scale-125 transition-all duration-500 cursor-pointer"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        </div>
                        <Link href={publication.link} className="p-4" target="_blank">
                            <Button className="bg-transparent border-yellow-500 border hover:border-yellow-900 flex gap-x-2">
                                Link to Paper
                                <BiLinkExternal className="text-base" />
                            </Button>
                        </Link>
                    </div>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
