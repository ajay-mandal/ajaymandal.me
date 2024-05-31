import Image from "next/image";

export default function HeroSvg() {
	return (
		<Image
			src="/main.png"
			alt="Hero"
			width={400}
			height={400}
		/>
	);
  }
