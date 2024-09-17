import { Player } from "./Game";

interface BoardProps {
    currentBoard: ((Player | null)[])[];
    handleDrop: (col: number) => void;
}

const Board = (props: BoardProps) => (
    <Container>
        {props.currentBoard.map((c: (Player | null)[], colIdx: number) => 
            <Column key={`slotCol-${colIdx}`} onClick={() => props.handleDrop(colIdx)}>
                {c.map((slot: Player | null, slotIdx: number) => 
                    <Slot player={slot} key={`slot-${slotIdx}-in-col-${colIdx}`}/>
                )}
            </Column>
        )}
    </Container>
)

const Container = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            w-full md:w-2/3 2xl:w-2/5
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
        `}
    >
        {props.children}
    </div>
)

const Column = (props: {children: React.ReactNode, onClick: () => void}) => (
    <div
        onClick={props.onClick}
        className={`
            flex
            flex-1
            flex-col-reverse
        `}
    >
        {props.children}
    </div>
)

const Slot = (props: {player: Player | null}) => (
    <div
        className={`
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
            ${props.player === null ? `bg-bone dark:bg-black` : props.player === Player.Red ? `bg-red-500 dark:bg-red-800` : `bg-yellow-300 dark:bg-yellow-500`}
        `}
    />
)

export default Board;