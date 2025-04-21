import React from "react";
import RandomNumberGenerator from "./Component/RandomQuoteGeneration.tsx";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ color: "#fff" }}>Random Quote Generation</h1>
        <RandomNumberGenerator />
      </div>
    </div>
  );
};

export default App;
