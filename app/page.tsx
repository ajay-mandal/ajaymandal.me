import Skills from "@/components/pages/Skills";
import WelcomeSection from "@/components/pages/Welcome";

export default function Home() {
  return (
    <div className="h-full w-full relative flex-col justify-center items-center">
      <div className="flex justify-center text-center">
        <WelcomeSection />
      </div>
      <div className="flex justify-center text-center">
        <Skills />
      </div>
    </div>
  )
}
