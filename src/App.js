import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>

      {/* <Login></Login> */}
    </>
  );
}

export default App;
