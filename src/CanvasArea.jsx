import React, { useState } from "react";
import { Rnd } from "react-rnd";

const CanvasArea = ({ textBoxes, setTextBoxes, backgroundColor }) => {
  const [selectedTextBox, setSelectedTextBox] = useState(null);

  const handleChange = (e, id) => {
    const newTextBoxes = textBoxes.map((box) =>
      box.id === id ? { ...box, text: e.target.value } : box
    );
    setTextBoxes(newTextBoxes);
  };

  const handleFocus = (id) => {
    setSelectedTextBox(id);
  };

  const handleBlur = () => {
    setSelectedTextBox(null);
  };

  return (
    <div
      className="min-h-[96vh] min-w-screen lg:m-1 lg:ml-1 rounded-lg relative"
      style={{
        backgroundColor: backgroundColor,
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {textBoxes.map((box) => (
        <Rnd
          key={box.id}
          default={{
            x: box.x,
            y: box.y,
            width: Math.max(200, box.text.length * (box.fontSize / 2)),
            height: Math.max(50, box.fontSize * 1.5),
          }}
          bounds="parent"
          minWidth={Math.max(200, box.text.length * (box.fontSize / 2))}
          minHeight={Math.max(50, box.fontSize * 1.5)}
        >
          <div
            className={`border ${
              selectedTextBox === box.id
                ? "border-solid"
                : box.text
                ? "border-none"
                : "border-dashed"
            } border-gray-500 p-2 flex items-center justify-center`}
            style={{
              fontFamily: box.font,
              fontSize: `${box.fontSize}px`,
              color: box.color,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <input
              value={box.text}
              onChange={(e) => handleChange(e, box.id)}
              onFocus={() => handleFocus(box.id)}
              onBlur={handleBlur}
              placeholder="Enter text here"
              className="w-full h-full bg-transparent outline-none"
              style={{
                fontFamily: box.font,
                fontSize: `${box.fontSize}px`,
              }}
            />
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default CanvasArea;
