import React, { useEffect, useState } from "react";
import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";

function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(Photo1);

  const images = [Photo1, Photo2, Photo3, Photo4];

  useEffect(() => {
    fetch("https://json-placeholder.pages.dev/quotes.json")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);
  // Pick a random quote
  const getRandomQuote = () => {
    const length = quotes.length;
    console.log("length", length);
    if (length > 0) {
      const randomIndex = Math.floor(Math.random() * length);
      const imageIndex = Math.floor(Math.random() * images.length);
      setRandomIndex(randomIndex);
      console.log("randomIndex", randomIndex);
      console.log("quotes====", quotes);
      setQuote(quotes[randomIndex]);
      setBackgroundImage(images[imageIndex]);
    }
  };

  console.log("quote", quote);
  return (
    <>
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          color: "white",
        }}
      >
        <p>{quote || "Click the button to get a quote!"}</p>
        <p>Random number : {randomIndex}</p>
        <button onClick={getRandomQuote}>Random Quote Generation</button>
      </div>
    </>
  );
}

export default RandomQuote;
