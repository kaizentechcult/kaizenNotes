import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

// import Home from "./pages/Home";
// import { Login } from "./pages/Login";
// import { Register } from "./pages/Register";
const App: Component = () => {
  return (
    <>
      <Router>
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Router>
    </>
  );
};

export default App;
