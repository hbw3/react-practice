import React from "react";
import Categoree from "./Categoree";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Categoree />
      {/* renderHTML(categoriesPrint) */}
      {/* React.createElement("input", {
        value: "hello",
        name: "this name",
        onChange: handleChange
      }) */}
    </div>
  );
}
