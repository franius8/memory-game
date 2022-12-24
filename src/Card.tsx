import React from "react";

export interface CardProps {
    content: number;
}

export default function Card(props: CardProps) {
  return (
    <div>
        {props.content}
    </div>
  );
}