// import loadable from "@loadable/component";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Invoices, { Invoice } from "./components/Invoices";
import "./App.scss";
import { Dash } from "./components/Dash";
import { Dashboard } from "./components/Dashboard";
import { Todo } from "./pages/Todo";
import { Count } from "./pages/Count";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { RouteAsObj } from "./components/RouteAsObj";
import { Search } from "./components/Search";
import LoginPage from "./components/auth/LoginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedPage from "./components/auth/ProtectedPage";
import { PublicPage } from "./components/auth/PublicPage";
import { Java } from "./pages/Java";
import { Scrolling } from "./pages/Scrolling";
import { Nav } from "./layout/Nav";
import { TodoEdPage } from "./components/todoed/TodoEdPage";

//------LOADING-----
// const Loading = () => {
//   return <div>Loading...</div>;
// };

// const Dashboard = loadable(() => import("./Dashboard.jsx"), {
// Dashboard = loadable(() => import("./components/Dashboard.jsx"), {
//   fallback: <Loading />,
// });
//  LOADING-END-----
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="todoepage" element={<TodoEdPage />} />
        <Route path="count" element={<Count />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="dash/*" element={<Dash />} />
        <Route path="object_route/*" element={<RouteAsObj />} />
        <Route path="search" element={<Search />} />
        <Route path="public" element={<PublicPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="java" element={<Java />} />
        <Route
          path="protected"
          element={
            <PrivateRoute>
              <ProtectedPage x={1} />
            </PrivateRoute>
          }
        />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<p>Please select an invoice above</p>} />
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="scrolling" element={<Scrolling />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Header />
      <Content />
      <Foother /> */}
    </div>
  );
};

export default App;
