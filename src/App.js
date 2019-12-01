import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
