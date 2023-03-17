import React from "react";
import Card from "./Card";

export default function DisplayPeople({ peoples }) {
  return (
    <div className="display">
      {peoples.map((el) => (
        <Card item={el} />
      ))}
    </div>
  );
}
