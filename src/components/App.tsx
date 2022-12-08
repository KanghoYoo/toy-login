import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { createGlobalStyle } from "styled-components";
import Error404 from "./Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup/" element={<SignUp />}></Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

// const GlobalStyle = createGlobalStyle`
// body {
//   margin: 0;
//   padding: 0;
//   font-family: sans-serif;
//   box-sizing: border-box;
//   background: #f1f1f5;
// }

// *, *:before, *:after {
//   box-sizing: inherit;
// }
// `;

export default App;
