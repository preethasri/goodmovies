import React from "react";
import "./styles.css";
import { useState } from "react";

const filmDB = {
  Comic: [
    { name: "Thillu Mullu", rating: "4.5/5" },
    { name: "Avvai Shanmughi", rating: "4/5" }
  ],
  Action: [
    { name: "Singam", rating: "4.5/5" },
    { name: "thuppaki", rating: "4/5" }
  ],
  Romance: [
    { name: "Mouna Ragam", rating: "4/5" },
    { name: "alai payuthey", rating: "3.5/5" }
  ],
  Biopic: [
    { name: "M.S Dhoni", rating: "4.5/5" },
    { name: "mahanati", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Biopic");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎬 Good south indian movies</h1>
      <p style={{ fontSize: "large", fontWeight: "bold" }}>
        {""}
        checkout my favourite movies. select a genre to get started{""}
      </p>
      <div>
        {Object.keys(filmDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              backgroundColor: "#FFCC00",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              border: "2px solid black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlinestart: "0" }}>
          {filmDB[selectedGenre].map((film) => (
            <li
              key={film.name}
              style={{
                listStyle: "none",
                padding: "5rem",
                border: "3px solid black",
                width: "50%",
                margin: "auto",
                borderRadius: "0.5rem",
                color: "#100303",
                fontWeight: "bold"
              }}
            >
              {""}

              <div style={{ fontsize: "larger" }}> {film.name}</div>
              <div style={{ fontsize: "smaller" }}> {film.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
