import React, { useEffect, useState } from "react";

function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(1);

  useEffect(() => {
    fetch("https://json-placeholder.pages.dev/quotes.json")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);

  const getRandomQuote = () => {
    const length = quotes.length;

    if (length > 0) {
      const randomIndex = Math.floor(Math.random() * length);
      const imageIndex = backgroundImage + 1;
      if (imageIndex > 4) {
        setBackgroundImage(1);
      } else {
        setBackgroundImage(imageIndex);
      }
      setRandomIndex(randomIndex);

      setQuote(quotes[randomIndex]);
    }
  };

  return (
    <>
      <img
        src={`/assets/Photo${backgroundImage}.jpg`}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw", // virtual width
          height: "100vh", // virtual height
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
          filter: "blur(0px) brightness(1.5)",
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "2rem",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.36)",
          borderRadius: "50px",
          margin: "78px auto",
          backdropFilter: "saturate(100%) blur(8px)",
          maxWidth: "750px",
          minWidth: "750px",
          maxHeight: "250px",
          minHeight: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontFamily: "Courier New, monospace", fontSize: "25px" }}>
          {quote || "Click the button to get a quote!"}
        </p>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
            marginTop: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Random number : {randomIndex}
        </p>
      </div>
      <button
        style={{
          backgroundColor: "#005A9C",
          borderRadius: "40px",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={getRandomQuote}
      >
        Random Quote Generation
      </button>
    </>
  );
}

export default RandomQuote;
