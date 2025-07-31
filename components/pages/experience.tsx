import Image from "next/image";
import { Slide } from "../animations/Slide";
import { JOBS } from "@/data/job";
import { formatDate } from "@/lib/date";
import { LinkPreview } from "../animations/link-preview";

export default function Job() {

  return (
    <section>
      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10">
          {JOBS.map((data) => (
            <div
              key={data.id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-700"
            >
              <LinkPreview url={data.url}>
                  <div className="flex items-center justify-center border border-zinc-700/50 h-16 w-16 p-3 rounded-xl overflow-hidden relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-zinc-900/20 transition-all duration-300 hover:scale-105 hover:border-zinc-600/50 group">
                    <Image
                        src={data.logo}
                        className="object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110"
                        alt={`${data.name} logo`}
                        width={32}
                        height={32}
                        priority
                    />
                  </div>
              </LinkPreview>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="text-cyan-500">
                      Present
                    </span>
                  )}
                </time>
                <p className="tracking-tight text-zinc-400  my-4">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
