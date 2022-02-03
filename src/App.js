import { Routes, Route, NavLink as Link } from "react-router-dom";
import "./App.scss";
import { Dash } from "./components/Dash";
import { Dashboard } from "./components/Dashboard";
import { About } from "./pages/About";
import { Count } from "./pages/Count";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import RouteAsObj from "./components/RouteAsObj";
import Search from "./components/Search";

const App = () => {
  // const name = 'Dave'
  return (
    <div className="App">
      {/* <p>Hello {name}!</p> */}
      {/* <p>Hello World!</p> */}
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="dash" activeClassName="active">
              Dash
            </Link>
          </li>
          <li>
            <Link to="about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="count" activeClassName="active">
              Count
            </Link>
          </li>
          <li>
            <Link to="/object_route" activeClassName="active">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active">
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="count" element={<Count />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="dash" element={<Dash />} />
          <Route path="object_route/*" element={<RouteAsObj />} />
          <Route path="search" element={<Search />} />
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
