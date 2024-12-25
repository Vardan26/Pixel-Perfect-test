import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Layout from "./components/layout";
import { Home } from "pages/home";

function App() {
  return (
    <Router>
      <div className="max-w-[400px] h-screen m-auto">
        <Layout>
          <Home />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
