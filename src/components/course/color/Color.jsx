import { Input } from "./Input";
import { Square } from "./Square";
import { useState } from "react";
import './Color.scss';

export const Color = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="Color">
      Color
      <Square 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <Input 
      colorValue={colorValue} 
      setColorValue={setColorValue} 
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </div>
  );
};
