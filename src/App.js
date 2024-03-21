import React, { useState, useEffect } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(1);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition >= 100 ? 100 : newPosition;
      });
    }, 100);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [scrollPosition]);

  const adjustNumber = (index, offset) => {
    return scrollPosition + offset + index;
  };

  const verticalScrollViewStyle = {
    // height: "100%",
    overflowY: "scroll",
    border: "1px solid #ccc",
  };

  const horizontalScrollViewStyle = {
    display: "flex",
    width: "100%",
    height: "50px",
    overflowX: "scroll",
    border: "1px solid #ccc",
  };

  const numberStyle = {
    padding: "8px",
    fontSize: "14px",
  };

  return (
    <div data-testid="app-component">
      <div
        style={verticalScrollViewStyle}
        data-testid="vertical-scroll-container"
      >
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} style={numberStyle} data-testid="number">
            {adjustNumber(index, 0)}
          </div>
        ))}
      </div>
      <div
        style={horizontalScrollViewStyle}
        data-testid="horizontal-scroll-container"
      >
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} style={numberStyle} data-testid="number">
            {adjustNumber(index, 100)}
          </div>
        ))}
      </div>
      <div
        style={verticalScrollViewStyle}
        data-testid="vertical-scroll-container"
      >
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} style={numberStyle} data-testid="number">
            {adjustNumber(index, 200)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
