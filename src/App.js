import React from "react";
import "./styles.css";
import { useState } from "react";

const filmDB = {
  Comic: [
    {
      name: "Thillu Mullu",
      rating: "4.5/5",
      description:
        "Description:a young man fools his boss and attempts to woo his boss' daughter."
    },
    {
      name: "Avvai Shanmughi",
      rating: "4/5",
      description:
        "Description:A man disguises himself as a nanny to be with his daughter after his divorce."
    },
    {
      name: "panchaTanthiram",
      rating: "4.2/5",
      description:
        "Description:5 friends who enjoy a lot even after marriage and that ends in a confusion how they are handling  is the end of the story"
    }
  ],
  Action: [
    {
      name: "Singam",
      rating: "4.5/5",
      description:
        "Description:Honest police officer Durai Singam locks horns with big-time extortionist Mayil Vaaganam."
    },
    {
      name: "thuppaki",
      rating: "4/5",
      description:
        "Description:An army captain is on a mission to track down and destroy a terrorist gang and deactivate the sleeper cells under its command."
    },
    {
      name: "virumaandi",
      rating: "4.1/5",
      description:
        "Description:A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village."
    }
  ],
  Romance: [
    {
      name: "Mouna Ragam",
      rating: "4/5",
      description:
        "Description:Divya, a woman grieving over the death of her lover, is convinced into an arranged marriage with Chandra Kumar. Over a year the couple attempt to adjust to each other's presence and live with each other."
    },
    {
      name: "alai payuthey",
      rating: "3.5/5",
      description:
        "Description:After a difficult romance in a class-divided society, the love birds find out marriage is not what they thought it would be."
    },
    {
      name: "vaaranam aayiram",
      rating: "3.8/5",
      description:
        "Description:A father and son help each other through growing up, romance, tragedy, and adventure."
    }
  ],
  Biopic: [
    {
      name: "M.S Dhoni",
      rating: "4.5/5",
      description:
        "Description:The untold story of Mahendra Singh Dhoni's journey from ticket collector to trophy collector - the world-cup-winning captain of the Indian Cricket Team."
    },
    {
      name: "mahanati",
      rating: "4/5",
      description:
        "Description:Biography of Savitri, an actress from South India movie industry, who ruled the industry for two decades during 50s and 60s."
    },
    {
      name: "soorarai potru",
      rating: "4.8/5",
      description:
        "Description:Nedumaaran Rajangam Maara sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way."
    }
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
              backgroundColor: "#FECD1A",
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
        <ul>
          {filmDB[selectedGenre].map((film) => (
            <li
              key={film.name}
              style={{
                listStyle: "none",

                width: "50%",
                borderRadius: "0.5rem",
                color: "#100303",
                fontWeight: "bold",
                margin: "0 auto",
                marginBottom: "1em",
                marginTop: "3em",
                border: "3px solid black"
              }}
            >
              {""}

              <div style={{ fontsize: "larger" }}> {film.name}</div>
              <div style={{ fontsize: "smaller" }}> {film.rating}</div>
              <div style={{ fontsize: "smaller" }}> {film.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
