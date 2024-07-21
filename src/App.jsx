import React, { useState, useEffect } from "react";
import CanvasArea from "./CanvasArea";
import FontOption from "./FontOption";
import { IoArrowUndoCircle } from "react-icons/io5";
import { IoArrowRedoCircle } from "react-icons/io5";

const App = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedFontSize, setSelectedFontSize] = useState("16");
  const [selectedFontColor, setSelectedFontColor] = useState("#000000");
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#FFFFFF"); // Default to white
  const [textBoxes, setTextBoxes] = useState([
    {
      id: Date.now(),
      text: "Initial Text",
      font: selectedFont,
      fontSize: selectedFontSize,
      color: selectedFontColor,
      x: 100,
      y: 100,
      width: 200,
      height: 50,
    },
  ]);

  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const initialState = [
      {
        id: Date.now(),
        text: "Initial Text",
        font: selectedFont,
        fontSize: selectedFontSize,
        color: selectedFontColor,
        x: 100,
        y: 100,
        width: 200,
        height: 50,
      },
    ];
    setHistory([initialState]);
    setCurrentIndex(0);
  }, [selectedFont, selectedFontSize, selectedFontColor]);

  const addTextBox = () => {
    const newTextBoxes = [
      ...textBoxes,
      {
        id: Date.now(),
        text: "New Text",
        font: selectedFont,
        fontSize: selectedFontSize,
        color: selectedFontColor,
        x: 100,
        y: 100,
        width: 200,
        height: 50,
      },
    ];
    setTextBoxes(newTextBoxes);
    updateHistory(newTextBoxes);
  };

  const updateHistory = (newTextBoxes) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newTextBoxes]);
    setCurrentIndex(newHistory.length);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTextBoxes(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTextBoxes(history[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow overflow-auto p-4">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="flex flex-col h-full">
            {/* Canvas Area with max height and width */}
            <div className="relative h-full max-h-screen overflow-hidden">
              <CanvasArea
                textBoxes={textBoxes}
                setTextBoxes={(newTextBoxes) => {
                  setTextBoxes(newTextBoxes);
                  updateHistory(newTextBoxes);
                }}
                backgroundColor={selectedBackgroundColor}
              />
            </div>
          </div>
          <div className="flex flex-col h-full items-center">
            <FontOption
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              selectedFontSize={selectedFontSize}
              setSelectedFontSize={setSelectedFontSize}
              selectedFontColor={selectedFontColor}
              setSelectedFontColor={setSelectedFontColor}
              selectedBackgroundColor={selectedBackgroundColor}
              setSelectedBackgroundColor={setSelectedBackgroundColor}
            />
            <div className="flex flex-col items-center w-full mt-4">
              <a
                className="bg-gradient-to-r from-orange-500 to-orange-600 border font-bold text-white px-6 py-2 rounded-full ml-4 mt-4 hover:shadow-lg hover:scale-105 transition-transform duration-200"
                href="#"
                onClick={addTextBox}
              >
                ADD TEXT
              </a>
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded-full flex items-center hover:bg-gray-400 transition-colors duration-200 hover:shadow-lg hover:scale-105"
                  onClick={handleUndo}
                  disabled={currentIndex <= 0}
                >
                  Undo <IoArrowUndoCircle className="text-lg" />
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded-full flex items-center hover:bg-gray-400 transition-colors duration-200 hover:shadow-lg hover:scale-105"
                  onClick={handleRedo}
                  disabled={currentIndex >= history.length - 1}
                >
                  Redo <IoArrowRedoCircle className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
