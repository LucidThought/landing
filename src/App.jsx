import React from "react";
import PageHeader from "./components/layout/page-header";
import PageBody from "./components/layout/page-body";
import "./App.css";

const App = () => {
  return (
    <div className="no-border">
      <PageHeader />
      <PageBody />
    </div>
  );
};

export default App;
