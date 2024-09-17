"use client"

import { useEffect, useState } from "react";
import Board from "./Board";

export enum Player { Red, Yellow};
const COLS: number = 7;
const ROWS: number = 6;
const blankBoard: ((Player | null)[])[] = Array(COLS).fill(Array(ROWS).fill(null));

const Game = () => {
    const [currentBoard, setCurrentBoard] = useState<((Player | null)[])[]>(blankBoard)
    const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.Red);
    const [winner, setWinner] = useState<Player | null>(null);
    const [isTie, setIsTie] = useState<boolean>(false);

    const handleDrop = (colIdx: number): void => {
        if (winner !== null || isTie) {
            return;
        }
        
        const spacesAlreadyTakenInThisCol: number = currentBoard[colIdx].filter((s) => s !== null).length;
        if (spacesAlreadyTakenInThisCol < ROWS) {
            let newBoard: ((Player | null)[])[] = [...currentBoard];
            let newCol: (Player | null)[] = [...currentBoard[colIdx]];
            newCol[spacesAlreadyTakenInThisCol] = currentPlayer;
            newBoard[colIdx] = newCol;
            setCurrentBoard(newBoard);
            setCurrentPlayer(currentPlayer === Player.Red ? Player.Yellow : Player.Red)
        } else {
            alert(`This column is already full! Choose another column.`)
        }
    }

    const handlePlayAgain = (): void => {
        setCurrentPlayer(winner ?? Player.Red)
        setCurrentBoard(blankBoard);
        setWinner(null);
        setIsTie(false);
    }

    const checkForWinner = (): boolean => {
        for (let row = 0; row < ROWS - 3; row += 1) {
            for (let col = 0; col < COLS; col += 1) {
                if (currentBoard[col][row] !== null && currentBoard[col][row] === currentBoard[col][row+1] && currentBoard[col][row+1] === currentBoard[col][row+2] && currentBoard[col][row+2] === currentBoard[col][row+3]) {
                    return true;
                }
            }
        }

        for (let col = 0; col < COLS - 3; col += 1) {
            for (let row = 0; row < ROWS; row += 1) {
                if (currentBoard[col][row] !== null && currentBoard[col][row] === currentBoard[col+1][row] && currentBoard[col+1][row] === currentBoard[col+2][row] && currentBoard[col+2][row] === currentBoard[col+3][row]) {
                    return true;
                }
            }
        }
        
        for (let col = 3; col < COLS; col += 1) {
            for (let row = 0; row < ROWS - 3; row += 1) {
                if (currentBoard[col][row] !== null && currentBoard[col][row] === currentBoard[col-1][row+1] && currentBoard[col-1][row+1] === currentBoard[col-2][row+2] && currentBoard[col-2][row+2] === currentBoard[col-3][row+3]) {
                    return true;
                }
            }
        }

        for (let row = 3; row < ROWS; row += 1) {
            for (let col = 3; col < COLS; col += 1) {
                if (currentBoard[col][row] !== null && currentBoard[col][row] === currentBoard[col-1][row-1] && currentBoard[col-1][row-1] === currentBoard[col-2][row-2] && currentBoard[col-2][row-2] === currentBoard[col-3][row-3]) {
                    return true;
                }
            }
        }

        return false;
    }

    useEffect(() => {
        if (winner === null) {
            if (checkForWinner()) {
                setWinner(currentPlayer === Player.Red ? Player.Yellow : Player.Red);
            } else if (currentBoard.flat(Infinity).every((s) => s !== null)) {
                setIsTie(true);
            }
        }
    }, [currentBoard])

    return (
        <Container>
            <AboveBoardRow>
                {winner === null && !isTie? (
                    <TurnText>
                        It's&nbsp;<span className="font-bold">{`${Player[currentPlayer]}`}</span>'s turn!
                    </TurnText>
                ) : (
                    <WinnerText>
                        {winner !== null ? `${Player[winner].toUpperCase()} WINS!` : `TIE!`}
                    </WinnerText>
                )}
            </AboveBoardRow>
            <Board currentBoard={currentBoard} handleDrop={handleDrop}/>
            <BelowBoardRow>
                {winner === null && !isTie ? (
                    <BelowBoardTextPlaying>
                        Click a column to drop a disc!
                    </BelowBoardTextPlaying>
                ) : (
                    <BelowBoardTextOver onClick={() => handlePlayAgain()}>
                        Play again!
                    </BelowBoardTextOver>
                )}
            </BelowBoardRow>
        </Container>
    )
}

const Container = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-col
            justify-between
            items-center
            w-full
            space-y-1.5 md:space-y-4
        `}
    >
        {props.children}
    </div>
)

const AboveBoardRow = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            h-8
            items-start
        `}
    >
        {props.children}
    </div>
)

const BelowBoardRow = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            h-8
            items-end
        `}
    >
        {props.children}
    </div>
)

const TurnText = (props: {children: React.ReactNode}) => (
    <p
        className={`
            font-mono
            text-xl md:text-3xl
        `}
    >
        {props.children}
    </p>
)

const WinnerText = (props: {children: React.ReactNode}) => (
    <p
        className={`
            font-mono
            text-xl md:text-3xl
            font-bold
        `}
    >
        {props.children}
    </p>
)

const BelowBoardTextPlaying = (props: {children: React.ReactNode}) => (
    <p
        className={`
            font-mono
            font-light
            text-sm md:text-base
            text-black dark:text-white
            opacity-75
        `}
    >
        {props.children}
    </p>
)

const BelowBoardTextOver = (props: {children: React.ReactNode, onClick: () => void}) => (
    <p
        onClick={props.onClick}
        className={`
            font-mono
            font-semibold
            cursor-pointer
            text-xs md:text-base
            px-4
            py-1
            border-2
            border-black
            rounded-full
            hover:shadow-none
            hover:drop-shadow-md
            bg-gray-100
            dark:bg-gray-600
            dark:border-gray-700
            hover:-translate-y-1
            duration-200
        `}
    >
        {props.children}
    </p>
)

export default Game;