"use client";

import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { WelcomeAnimation } from "@/components/animations/Welcome";

export default function WelcomeSection() {



	return (
		<LazyMotion features={domAnimation} >
			<section className="w-full font-incognito flex flex-col lg:flex-row py-12 lg:py-164 px-48 md:px-40 justify-center items-center">
                <h1>
                    Hello
                </h1>
				<WelcomeAnimation />
			</section>
		</LazyMotion>
	);
}
