// import loadable from "@loadable/component";
import React from "react";
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
import LoginPage from "./components/auth/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedPage from "./components/auth/ProtectedPage";
import { PublicPage } from "./components/auth/PublicPage";

//------LOADING-----
// const Loading = () => {
//   return <div>Loading...</div>;
// };

// const Dashboard = loadable(() => import("./Dashboard.jsx"), {
//   fallback: <Loading />,
// });
//  LOADING-END-----
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
            <Link to="/dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dash" activeClassName="active">
              Dash
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/count" activeClassName="active">
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
          <li>
            <Link to="/public" activeClassName="active">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/protected" activeClassName="active">
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="count" element={<Count />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="dash" element={<Dash />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <Route
            path="protected"
            element={
              <PrivateRoute>
                <ProtectedPage x={1} />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      {/* <Header />
      <Content />
      <Foother /> */}
    </div>
  );
};

export default App;
