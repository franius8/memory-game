import React from "react";
import "./App.css";
import Board from "./Board";

export default function App() {
    const [count, setCount] = React.useState<number>(0);
    const [highScore, setHighScore] = React.useState<number>(0);
    const increment = () => {
        setCount(count + 1);
        if (count + 1 > highScore) {
            setHighScore(count + 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div>
        <h1>Memory Game</h1>
        <Board increment={increment} reset={reset} />
        <h2>Current score: {count}</h2>
        <h2>High score: {highScore}</h2>
    </div>
  );
}