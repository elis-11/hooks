import "./App.scss";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
// import { Navbar } from "./components/Navbar";

const App = () => {
  //--1
  // const name = 'Dave'
  // const name1 = 'John'
  // --2

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* --1 */}
      {/* Hi <p>Elis</p>
       <p>Hello {name1}!</p>
       <p>Hello {name}!</p>
      <p>Hello World!</p> */}
      {/* --2 */}
      <Content />
      <Header />
    </div>
  );
};
export default App;
