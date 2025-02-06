import { Player } from "./Game";

type BoardProps = {
	currentBoard: (Player | null)[][];
	handleDrop: (col: number) => void;
};

export default function Board(props: BoardProps) {
	return (
		<div className={containerStyling}>
			{props.currentBoard.map((c: (Player | null)[], colIdx: number) => (
				<div
					className={columnStyling}
					key={`slotCol-${colIdx}`}
					onClick={() => props.handleDrop(colIdx)}
				>
					{c.map((slot: Player | null, slotIdx: number) => (
						<div
							key={`slot-${slotIdx}-in-col-${colIdx}`}
							className={
								slot === null
									? slotStylingNullPlayer
									: slot === Player.Red
										? slotStylingRedPlayer
										: slotStylingYellowPlayer
							}
						/>
					))}
				</div>
			))}
		</div>
	);
}

const containerStyling = `
	flex
	flex-row
	w-full
	bg-blue-600
	dark:bg-blue-700
	shadow-inner
	shadow-black
	rounded-lg
	justify-between
	p-2 md:p-5
	space-x-2
	drop-shadow-xl
	border-4
	border-blue-800
	dark:border-blue-900
`;

const columnStyling = `
	flex
	flex-1
	flex-col-reverse
`;

const slotStylingBase = `
	flex
	flex-col
	aspect-square
	rounded-full
	border-[1px]
	md:border-4
	border-blue-800
	dark:border-blue-900
	my-1
	shadow-inner
	shadow-black
	duration-200
`;

const slotStylingNullPlayer = `
	${slotStylingBase}
	bg-bone dark:bg-black
`;
const slotStylingRedPlayer = `
	${slotStylingBase}
	bg-red-500 dark:bg-red-800
`;
const slotStylingYellowPlayer = `
	${slotStylingBase}
	bg-yellow-300 dark:bg-yellow-500
`;
