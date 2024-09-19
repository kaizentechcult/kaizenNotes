import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";

const App: Component = () => {
  return (
    <>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Router>
    </>
  );
};

export default App;
