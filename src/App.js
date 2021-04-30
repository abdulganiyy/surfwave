import "./App.css";
import Layout from "./Containers/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Terms from "./Pages/Terms/Terms";
import Error from "./Pages/Error/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/terms" component={Terms} />
        <Route component={Error} />
      </Switch>
    </Layout>
  );
}

export default App;
