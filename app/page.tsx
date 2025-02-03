import { Slide } from "@/components/animations/Slide";
import HeroSvg from "@/components/animations/Welcome";
import Skills from "@/components/pages/Skills";
import Social from "@/components/shared/Social";
import { ImagePreview } from "@/components/animations/image-preview";
import Project from "./projects/page";
import ContactForm from "@/components/pages/contact";
import GitHubCalendar from 'react-github-calendar';

export default function Home() {

  return (
    <>
        <div className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
          <section className="flex xl:flex-row flex-col items-center justify-center gap-x-12">
            <div className="max-w-3xl">
                <Slide delay={0.1}>
                <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight ">
                    <ImagePreview image="/sad.gif">
                    Software Engineer
                    </ImagePreview>
                    <ImagePreview image="/dance.gif">
                    &nbsp;and a  Dev
                    </ImagePreview>
                </h1>
                </Slide>
                <p className="text-base text-zinc-400 leading-relaxed">
                I&apos;m a&nbsp;Software Engineer skilled in building functional user interfaces,
                robust backends and develop & deploy them scalably. I enjoy working on projects
                that utilize both front-end and back-end technologies to create seamless user experiences.
                I excel at designing solutions that are both effective and suited to your individual situation.
                </p>
                <Social type="social"/>
                <div className="hidden md:block">
                  <GitHubCalendar
                  username="ajay-mandal"
                  hideTotalCount
                  hideColorLegend
                  colorScheme="dark"
                  />
                </div>
            </div>
            <div className="w-60 md:w-72 lg:w-full flex justify-center items-center">
              <HeroSvg />
            </div>
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
    </>
  )
}
