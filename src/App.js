import "./App.scss";
// import { Navbar } from "./components/Navbar";

const App = () => {

const name = 'Dave'
const name1 = 'John'

  return (
    <div className="App">
      {/* <Navbar /> */}
      Hi <p>Elis</p>
       <p>Hello {name1}!</p>
       <p>Hello {name}!</p>
      <p>Hello World!</p>
    </div>
  );
};
export default App;
