export const Content = () => {
  const contentStyle = { color: "white" };

  const handleNameChange = () => {
    const names = ["Rob", "John", "Dave", "Peter", "Luis"];
    const concret = Math.floor(Math.random() * 5);
    return names[concret];
  };
  return (
    <main style={contentStyle}>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};
