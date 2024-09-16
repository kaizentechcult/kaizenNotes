import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import { Login } from "./pages/Login";
const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
