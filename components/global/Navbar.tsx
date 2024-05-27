import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./Mobile";


export default function Navbar() {

  const data = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact Me",
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="text-sm py-6 md:px-16 px-6 border-b border-zinc-800  z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-row gap-x-4">
            <Image src="/logo-dark.png" width={35} height={35} alt="logo" />
            <div className="py-1">
            <h1 className="font-incognito font-semibold text-xl">Portfolio</h1>
            </div>
          </Link>

          <nav className="sm:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito text-white  hover:text-cyan-600  duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:hidden flex items-center gap-x-4">
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
