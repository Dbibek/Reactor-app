import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import { Assessories } from "./pages/Assessories";
import { Jackets } from "./pages/Jackets";
import { Shirts } from "./pages/Shirts";

const apiUrl = "https://bad-api-assignment.reaktor.com/products/";

function App() {
  const [type, setType] = useState("jackets");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    Axios.get(`${apiUrl}/${type}`)
      .then((Response) => setData(Response.data))
      .catch((err) => console.log(err));
    return () => clearTimeout(timer);
  }, [type]);
  return (
    <Router>
      <div className="App">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <Link to="/jackets" onClick={() => setType("jackets")}>
                E-Market
              </Link>
            </div>
            <Link to="/jackets">
              <button onClick={() => setType("jackets")}>Jackets</button>
            </Link>
            <Link to="/shirts">
              <button onClick={() => setType("shirts")}>Shirts</button>
            </Link>
            <Link to="/accessories">
              <button onClick={() => setType("accessories")}>
                Accessories
              </button>
            </Link>
          </header>
          <main className="main">
            {loading ? (
              <Loading />
            ) : (
              <Switch>
                <Route exact path="/">
                  <Jackets data={data} />
                </Route>
                <Route path="/jackets">
                  <Jackets data={data} />
                </Route>
                <Route path="/shirts">
                  <Shirts data={data} />
                </Route>
                <Route path="/accessories">
                  <Assessories data={data} />
                </Route>
              </Switch>
            )}
          </main>
          <footer className="footer">All right reserved</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
