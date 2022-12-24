import React from "react";
import Card from "./Card";
import "./Board.css";

export default function Board() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className={"Board"}>
            {numbers.map((number) => (
                <Card content={number} key={number}/>
            ))}
        </div>
    );
}