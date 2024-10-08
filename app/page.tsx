import { Slide } from "@/components/animations/Slide";
import HeroSvg from "@/components/animations/Welcome";
import Skills from "@/components/pages/Skills";
import Social from "@/components/shared/Social";
import { ImagePreview } from "@/components/animations/image-preview";
import Project from "./projects/page";
import AboutPage from "@/components/pages/about";
import ContactForm from "@/components/pages/contact";


export default function Home() {
  return (
    <div>
        <div className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <section className="flex xl:flex-row flex-col items-center justify-between gap-x-12">
        <div className="max-w-4xl">
            <Slide delay={0.1}>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight ">
              <ImagePreview image="/sad.gif">
                Software Engineer
              </ImagePreview>
              <ImagePreview image="/dance.gif">
                , Developer
              </ImagePreview>
               , and a content creator.
            </h1>
            </Slide>
            <Slide delay={0.12}>
            <p className="text-base text-zinc-400 leading-relaxed">
            I&apos;m a&nbsp;Software Engineer skilled in building functional user interfaces,
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
        <div className="px-2">
          <Skills />
        </div>
        <div>
          <Project />
        </div>
        <div className="w-full mx-auto md:px-12 px-6 flex justify-center">
            <ContactForm />
        </div>
    </div>
  )
}
