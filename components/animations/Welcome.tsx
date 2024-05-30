import Image from "next/image";

export default function HeroSvg() {
	return (
		<Image
			src="/hello.gif"
			alt="Hero"
			width={400}
			height={400}
		/>
	);
  }
