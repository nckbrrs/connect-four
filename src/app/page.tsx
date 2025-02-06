"use client";
import Game from "~/components/Game";

export default function Home() {
	return (
		<div className={containerStyling}>
			<Game />
		</div>
	);
}

const containerStyling = `
	flex
	flex-col
	items-center
	justify-center
	h-full md:h-auto
	w-full
	text-black
	dark:text-bone
	px-4 md:px-8 md:max-w-[700px] lg:max-w-[1000px]
`;
