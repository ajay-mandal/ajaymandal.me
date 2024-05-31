import { Slide } from "@/components/animations/Slide";
import HeroSvg from "@/components/animations/Welcome";
import Skills from "@/components/pages/Skills";
import Social from "@/components/shared/Social";

export default function Home() {
  return (
    <div>
        <div className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <section className="flex xl:flex-row flex-col items-center justify-center gap-x-12">
        <div className="max-w-3xl">
            <Slide delay={0.1}>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Software Engineer, Developer, and a passionate learner.
            </h1>
            </Slide>
            <Slide delay={0.12}>
            <p className="text-base text-zinc-400 leading-relaxed">
            I&apos;m a Software Engineer skilled in building functional user interfaces,
            robust backends and develop & deploy them scalably. I enjoy working on projects
            that utilize both front-end and back-end technologies to create seamless user experiences.
              I excel at designing solutions that are both effective and suited to your individual situation.
            </p>
            <Social type="social"/>
            </Slide>
        </div>
        <Slide delay={0.12}>
          <div className="w-60 md:w-72 lg:w-96">
            <HeroSvg />
          </div>
          </Slide>
        </section>
        </div>
        <div className="flex justify-center text-center">
          <Skills />
        </div>
    </div>
  )
}
