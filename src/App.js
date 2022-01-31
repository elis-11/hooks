import "./App.scss";
import { Content } from "./components/Content";
import { Foother } from "./components/Foother";
import { Header } from "./components/Header";

const App = () => {
  // const name = 'Dave'
  return (
    <div className="App">
       {/* <p>Hello {name}!</p> */}
      {/* <p>Hello World!</p> */}
      <Header />
      <Content />
      <Foother />
    </div>
  );
};
export default App;
// 1:17
