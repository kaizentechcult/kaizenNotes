import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";

import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Toaster } from "react-hot-toast";
const App: Component = () => {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </>
  );
};

export default App;
