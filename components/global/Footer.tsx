import Image from "next/image";


export default function Footer() {
  return(
    <footer className="border-t border-zinc-800  mt-10 lg:min-h-full min-h-full relative">
    <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-8">
      <div className="flex md:flex-row flex-col items-center gap-x-2 font-incognito">
        <h3 className="font-inter">Built with ❤️ using</h3>
        <ul className="flex items-center gap-x-2 text-sm text-zinc-600  md:mt-0 mt-3">
          <li>
            <a
              href="https://nextjs.org"
              rel="Next.js"
              target="_blank"
              className="flex items-center gap-x-2 text-white  hover:underline"
            >
              <Image
                src="/nextjs.svg"
                width={20}
                height={20}
                alt="nextjs logo"
              />
              Next.js
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/"
              rel="Framer Motion"
              target="_blank"
              className="flex items-center gap-x-2 text-white  hover:underline"
            >
              <Image
                src="/framer-motion.svg"
                width={15}
                height={20}
                alt="Fmotion logo"
              />
              Framer Motion
            </a>
          </li>
        </ul>
      </div>


      <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
        <small className="text-zinc-400 font-incognito">
          Copyright &copy; Ajay Mandal {new Date().getFullYear()} All rights No Worries Keep Coding
        </small>
      </div>
    </div>
  </footer>
  )
}
