import './Color.scss';

export const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section 
    className="square" 
    style={{ backgroundColor: colorValue,
    color: isDarkText ? '#ff00ff' : '#FFF'
    }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};
