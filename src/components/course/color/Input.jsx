import "./Color.scss";
import colorNames from "colornames";

export const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
 }) => {
  return (
    <form 
    className="input" 
    onSubmit={(e) => e.preventDefault()}>
      {/* <label>Add Color Name:</label> */}
      <div>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value)); // 2:58
        }}
        />
        </div>
        <div>
      <button
      type="button"
      onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
        </div>
    </form>
  );
};
