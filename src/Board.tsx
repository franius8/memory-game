import React from "react";
import Card from "./Card";
import "./Board.css"

export interface BoardProps {
    increment: () => void;
    reset: () => void;
}

export default function Board(props: BoardProps) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [shuffledNumbers, setShuffledNumbers] = React.useState<number[]>(numbers);
    const [clickedNumbers, setClickedNumbers] = React.useState<number[]>([]);
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        let newNumbers = shuffledNumbers
        newNumbers = newNumbers.sort(() => Math.random() - 0.5);
        setShuffledNumbers([...newNumbers]);
        const clickedNumber = parseInt(event.currentTarget.innerText);
        if (clickedNumbers.includes(clickedNumber)) {
            props.reset();
            setClickedNumbers([]);
        } else {
            if (clickedNumbers.length === 8) {
                props.increment();
                setClickedNumbers([]);
            } else {
                props.increment();
                setClickedNumbers([...clickedNumbers, clickedNumber]);
            }
        }
    };

    return (
        <div className={"Board"}>
            {shuffledNumbers.map((number) => (
                <Card content={number} key={number} click={clickHandler}/>
            ))}
        </div>
    );
}