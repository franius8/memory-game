import React, {MouseEventHandler} from "react";
import "./Card.css";

export interface CardProps {
    content: string;
    click: MouseEventHandler<HTMLDivElement>;
}

export default function Card(props: CardProps) {
  // @ts-ignore
    return (
    <div className={"Card"} onClick={props.click} id={props.content}>
        <img src={`./icons/${props.content}.svg`} alt={props.content} />
    </div>
  );
}