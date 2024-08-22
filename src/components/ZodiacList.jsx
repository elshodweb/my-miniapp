// ZodiacList.jsx
import React from "react";
import ZodiacItem from "./ZodiacItem";
import { names } from "../data/names";

function ZodiacList({ onSignClick }) {
  return (
    <div className="zodiac-list">
      {names.map((sign) => (
        <ZodiacItem
          key={sign.id}
          sign={sign}
          onSignClick={onSignClick}
        />
      ))}
    </div>
  );
}

export default ZodiacList;
