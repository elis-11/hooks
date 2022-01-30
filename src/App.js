import "./App.scss";
// import { Navbar } from "./components/Navbar";

const App = () => {
//--1
// const name = 'Dave'
// const name1 = 'John'
// --2
const handleNameChange = () => {
  const names = ['Rob', 'John', 'Dave']
  const concret = Math.floor(Math.random() *3)
  return names[concret]
}

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* --1 */}
      {/* Hi <p>Elis</p>
       <p>Hello {name1}!</p>
       <p>Hello {name}!</p>
      <p>Hello World!</p> */}
      {/* --2 */}
      Hello {handleNameChange()}
    </div>
  );
};
export default App;
