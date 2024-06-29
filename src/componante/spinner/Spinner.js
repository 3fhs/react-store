import React from "react";
import "./Spinner.css";

function Spinner() {
  const dots = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="spinner">
      <div className="dots">
        {dots.map((dot) => (
          <div
            className="dot"
            key={dot}
            style={{
              transform: `rotate(${
                dot * (360 / dots.length)
              }deg) translateY(35px)`,
              animationDelay: `${dot * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Spinner;
