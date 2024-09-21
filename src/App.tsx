import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";

const App: Component = () => {
  return (
    <>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
        {/* 
          Here we are passing the year as an id in the path. 
          In the Dashboard component, we can access this id using the useParams hook from @solidjs/router.

          For example, if the url is /dashboard/1, then we can access the year as follows:

          const params = useParams();
          const year = params.year;

          year will be '1' in this case.
        */}
        <Route path={`/dashboard/:year`} component={Dashboard} />
      </Router>
    </>
  );
};

export default App;