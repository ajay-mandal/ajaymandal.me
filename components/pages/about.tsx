import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { Slide } from "@/components/animations/Slide";

export default async function AboutPage() {

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
          <div>
            <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                    I&apos;m Ajay Kumar Mandal
                  </h1>
                </Slide>
              </div>

              <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      src="/3.png"
                      width={400}
                      height={400}
                      quality={100}
                      alt="profile"
                    />

                    <div className="flex flex-col text-center gap-y-4">
                      <div className="flex items-center gap-x-3">
                        <a
                          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1TkZU1olTYvyrHsF1_k1NsyofJxYkNvys_bFGxTiMHu8/export?format=pdf"
                          rel="noreferrer noopener"
                          target="_blank"
                          className="flex items-center justify-center text-center gap-x-2 basis-[90%] bg-gray-800/40 border border-transparent hover:border-zinc-400  rounded-md py-2 text-lg font-incognito font-semibold"
                        >
                          View Resume <BiLinkExternal className="text-base" />
                        </a>
                        <a
                          href="https://docs.google.com/document/d/1TkZU1olTYvyrHsF1_k1NsyofJxYkNvys_bFGxTiMHu8/export?format=pdf"
                          className="flex items-center justify-center text-center  hover:underline bg-gray-800/40  border border-transparent hover:border-zinc-400 rounded-md py-3 text-lg w-1/4"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
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
