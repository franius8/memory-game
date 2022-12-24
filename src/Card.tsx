import React, {MouseEventHandler} from "react";
import "./Card.css";

export interface CardProps {
    content: number;
    click: MouseEventHandler<HTMLDivElement>;
}

export default function Card(props: CardProps) {
  return (
    <div className={"Card"} onClick={props.click}>
        {props.content}
    </div>
  );
}