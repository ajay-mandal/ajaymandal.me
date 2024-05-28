import Image from "next/image";
import {BiLinkExternal} from "react-icons/bi";
import { Slide } from "@/components/animations/Slide";
import { Badge } from "../ui/badge";
import Education from "./education-flow";

export default async function AboutPage() {

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
          <div>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-1 lg:order-none grid gap-y-20">
                <Slide delay={0.1}>
                  <h1 className="font-incognito font-semibold tracking-tight sm:text-4xl text-2xl lg:leading-tight basis-1/2 mb-4">
                    I&apos;m Ajay Kumar Mandal
                  </h1>
                  <p className="text-gray-200/80">I am a dedicated and career-focused software developer specializing
                    in full-stack development and open-source contributions. My expertise
                    is in building interactive web applications on the client side, utilizing
                    technologies such as JavaScript, Next.js, TypeScript and advance backends using
                    serverless architectures and deployments.<br/><br/><br/>
                    <span className="flex items-center justify-center gap-x-4 px-4 bg-cyan-800/10 border border-transparent  rounded-md py-4">
                    If you ever spot me in the wild, don&apos;t hesitate to say hello!
                    Let&apos;s grab a drink and geek-out over the latest advancements in full-stack development
                    or discuss the new trending topic in 0-1 world. ✨
                    </span>
                    </p>
                </Slide>
                <Slide delay={0.14}>
                  <h1 className="font-incognito font-semibold tracking-tight sm:text-3xl text-xl lg:leading-tight basis-1/2 mb-4">
                    Education
                  </h1>< br/>
                  <div className="px-4">
                    <Education />
                  </div>
                </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src="/new-1.jpeg"
                      width={420}
                      height={420}
                      quality={100}
                      alt="profile"
                    />

                    <div className="flex flex-col text-center gap-y-4">
                      <div className="flex items-center gap-x-3">
                        <a
                          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1TkZU1olTYvyrHsF1_k1NsyofJxYkNvys_bFGxTiMHu8/export?format=pdf"
                          rel="ajay"
                          target="_blank"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] bg-gray-800/40 border border-transparent hover:border-zinc-400  rounded-md py-2 text-lg font-incognito font-semibold"
                        >

                          View Resume <BiLinkExternal className="text-base " />
                        </a>
                        <a
                          href="https://docs.google.com/document/d/1TkZU1olTYvyrHsF1_k1NsyofJxYkNvys_bFGxTiMHu8/export?format=pdf"
                          className="flex items-center justify-center text-center  hover:underline bg-gray-800/40  border border-transparent hover:border-zinc-400 rounded-md py-3 text-lg w-1/4"
                          title="Download Resume"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Slide>
              </aside>
            </section>
          </div>
    </main>
  );
}