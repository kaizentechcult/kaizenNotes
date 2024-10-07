import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AuthProvider } from "./utils/AuthContext";
import Verify from "./pages/verify/verify";

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
