import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import type { Component } from "solid-js";
import Verify from "./pages/verify/Verify";
import { Router, Route } from "@solidjs/router";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./utils/ThemeContext";
import Notes from "./pages/Notes";
// import { Analytics } from "@vercel/analytics/react";

const App: Component = () => {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verify" component={Verify} />
        <Route path="/" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/profile" component={Profile} />
        <Route path={`/dashboard/:year`} component={Dashboard} />
      </Router>
    </ThemeProvider>
  );
};

export default App;