import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import type { Component } from "solid-js";
import Verify from "./pages/verify/Verify";
import { Router, Route } from "@solidjs/router";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Verify from "./pages/verify/Verify";


const App: Component = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/verify" component={Verify} />
      <Route path="/" component={Home} />
      <Route path={`/dashboard/:year`} component={Dashboard} />
    </Router>
  );
};

export default App;
