import { Col, Row  } from './base';
import { Player } from './game';
import tw, { styled } from 'twin.macro';

interface BoardProps {
    currentBoard: ((Player | null)[])[];
    handleDrop: (col: number) => void;
}

const Board: React.FC<BoardProps> = ({currentBoard, handleDrop}) => {
    return (
        <Row tw="w-full md:w-2/3 2xl:w-2/5 bg-blue-600 dark:bg-blue-700 shadow-inner shadow-black rounded-lg justify-between p-2 md:p-5 space-x-2 drop-shadow-xl border-4 border-blue-800 dark:border-blue-900">
            {currentBoard.map((c: (Player | null)[], colIdx: number) => 
                <Col tw="flex-1 flex-col-reverse" key={`slotCol-${colIdx}`} onClick={() => handleDrop(colIdx)}>
                    {c.map((slot: Player | null, slotIdx: number) => 
                        <Slot player={slot} key={`slot-${slotIdx}-in-col-${colIdx}`}/>
                    )}
                </Col>
            )}
        </Row>
    )
}

export default Board;

const Slot = styled(Col)<{player: Player | null}>(({player}) => [
    tw`
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
    `,
    player === null ? tw`bg-bone dark:bg-black` : player === Player.Red ? tw`bg-red-500 dark:bg-red-800` : tw`bg-yellow-300 dark:bg-yellow-500`
])