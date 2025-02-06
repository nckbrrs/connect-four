export default function TopNav() {
	return (
		<div className={pageContainerStyling}>
			<p className={headerTextStyling}>Connect Four</p>
		</div>
	);
}

const pageContainerStyling = `
	flex
	flex-row
	w-full
	justify-center
	items-center
	py-8 sm:py-20
`;

const headerTextStyling = `
	font-bold
	text-4xl md:text-6xl
	font-mono
	drop-shadow-sm
`;
