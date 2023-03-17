import React from "react";

export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} />
      <h1>{item.name}</h1>
    </div>
  );
}
