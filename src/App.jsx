import React from "react";
import Page from "./pages/page"; // Make sure this file exists
import "./App.css";
import Homepage from "./pages/Home/components/Homepage";

export default function App() {
  return (
    <div className="app">
      {" "}
      {/* Added className for better debugging */}
      <Homepage />
      {/* Add some text to test rendering */}
      {/* <h1>Test Content</h1> */}
    </div>
  );
}
