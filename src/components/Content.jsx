export const Content = () => {
  //--style
  const contentStyle = { color: "white" };

  //--1
  const handleNameChange = () => {
    const names = ["Rob", "John", "Dave", "Peter", "Luis"];
    const concret = Math.floor(Math.random() * 5);
    return names[concret];
  };
  //--2
  const handleClick = () => {
    console.log("You clicked it");
  };
  //--3
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  //--4
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    //--style
    <main style={contentStyle}>
      {/* --1 --20 */}
      <p onDoubleClick={handleClick}>
          Hello {handleNameChange()}!
      </p>
      {/* --2 --44 */}
      <button onClick={handleClick}>Click it</button>
      {/* --3 --44 */}
      <button onClick={() => handleClick2('Rob')}>Click it</button>
      {/* --4 --48 */}
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};
