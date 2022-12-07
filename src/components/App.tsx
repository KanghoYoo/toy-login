import React from "react";
import Login from "./Login";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  background: #f1f1f5;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default App;
