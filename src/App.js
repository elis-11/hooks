import { Routes, Route, NavLink as Link } from "react-router-dom";
import "./App.scss";
import { Dashboard } from "./components/Dashboard";
import { About } from "./pages/About";
import { Count } from "./pages/Count";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const App = () => {
  // const name = 'Dave'
  return (
    <div className="App">
      {/* <p>Hello {name}!</p> */}
      {/* <p>Hello World!</p> */}
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">Dashboard</Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">About</Link>
          </li>
          <li>
            <Link to="count" activeClassName="active">Count</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/count" element={<Count />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* <Header />
      <Content />
      <Foother /> */}
    </div>
  );
};
export default App;
// 1:17
