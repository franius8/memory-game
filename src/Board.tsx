import React from "react";
import Card from "./Card";
import "./Board.css"

export interface BoardProps {
    increment: () => void;
    reset: () => void;
}

export default function Board(props: BoardProps) {
    const icons = ["hippo", "fish", "dragon", "otter", "horse", "cow", "frog", "spider", "kiwi"];
    const [shuffledNumbers, setShuffledNumbers] = React.useState<string[]>(icons);
    const [clickedNumbers, setClickedNumbers] = React.useState<string[]>([]);
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        let newNumbers = shuffledNumbers
        newNumbers = newNumbers.sort(() => Math.random() - 0.5);
        setShuffledNumbers([...newNumbers]);
        const clickedIcon = event.currentTarget.id;
        if (clickedNumbers.includes(clickedIcon)) {
            props.reset();
            setClickedNumbers([]);
        } else {
            if (clickedNumbers.length === 8) {
                props.increment();
                setClickedNumbers([]);
            } else {
                props.increment();
                setClickedNumbers([...clickedNumbers, clickedIcon]);
            }
        }
    };

    return (
        <div className={"Board"}>
            {shuffledNumbers.map((icon) => (
                <Card content={icon} key={icon} click={clickHandler}/>
            ))}
        </div>
    );
}