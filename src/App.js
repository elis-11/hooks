// import loadable from "@loadable/component";
import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import Invoices, { Invoice } from "./components/Invoices";
import "./App.scss";
import { Dash } from "./components/Dash";
import { Dashboard } from "./components/Dashboard";
import { Todo } from "./pages/Todo";
import { Count } from "./pages/Count";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import RouteAsObj from "./components/RouteAsObj";
import Search from "./components/Search";
import LoginPage from "./components/auth/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedPage from "./components/auth/ProtectedPage";
import { PublicPage } from "./components/auth/PublicPage";
import { Java } from "./pages/Java";
import { Scrolling } from "./pages/Scrolling";

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
      <div className="nav">
        <nav>
          <ul>
            <li><Link to="/" activeClassName="active" end>Home</Link></li>
            <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
            <li><Link to="/dash" activeClassName="active">Dash</Link></li>
            <li><Link to="/todo" activeClassName="active">Todo</Link></li>
            <li><Link to="/count" activeClassName="active">Count</Link></li>
            <li><Link to="/object_route" activeClassName="active">Route as Object</Link></li>
            <li><Link to="/search" activeClassName="active">Search</Link></li>
            <li><Link to="/public" activeClassName="active">Public Page</Link></li>
            <li><Link to="/protected" activeClassName="active">Protected Page</Link></li>
            <li><Link to="/invoices" activeClassName="active">Invoices</Link></li>
            <li><Link to="/java" activeClassName="active">Java</Link></li>
            <li><Link to="/scrolling" activeClassName="active">Scrolling</Link></li>
          </ul>
        </nav>
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="count" element={<Count />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="dash" element={<Dash />} />
          <Route path="object_route/*" element={<RouteAsObj />} />
          <Route path="search" element={<Search />} />
          <Route path="public" element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="java" element={<Java />} />
          <Route path="protected"element={<PrivateRoute><ProtectedPage x={1} /></PrivateRoute>} />
          <Route path="invoices" element={<Invoices />}>
          <Route index element={<p>Please select an invoice above</p>} />
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="scrolling" element={<Scrolling />} />
          </Route>
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
