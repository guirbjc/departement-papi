import { useState } from "react";
import "./DepRandom.css";
import { Link } from "react-router-dom";

export default function HeaderApp({ data }) {
  const getRandomDepartment = () => data[Math.floor(Math.random() * data.length)];
  const [departement, setDepartement] = useState(getRandomDepartment());
  const [activNumber, setActivNumber] = useState(0);

  const handleClick = () => {
    if (activNumber === 3) {
      setDepartement(getRandomDepartment());
      setActivNumber(0);
    } else {
      setActivNumber((prev) => prev + 1);
    }
  };

  const displayNumber =
    departement.name === "la Corse-du-Sud"
      ? "2A"
      : departement.name === "la Haute-Corse"
      ? "2B"
      : String(departement.number).padStart(2, "0");

  return (
    <main>
      <div id="randomGame-container">
        <div className="randomGame-dialogue">
          {activNumber >= 0 && (
            <div className="dialogue-bubble question first-question">
              C’est quel département le{" "}
                <span className="highlight dep-number">
                  {displayNumber}
                </span>{" "}
              papi ?
            </div>
          )}

          {activNumber >= 1 && (
            <>
              <div className="dialogue-bubble answer">
                C’est <span className="highlight">{departement.name}</span> bien sûr !
              </div>
              <div className="dialogue-bubble question">Et c’est quoi son chef-lieu ?</div>
            </>
          )}

          {activNumber >= 2 && (
            <>
              <div className="dialogue-bubble answer">
                <span className="highlight">{departement.capital}</span>, évidemment.
              </div>
              <div className="dialogue-bubble question">Et sa région ?</div>
            </>
          )}

          {activNumber >= 3 && (
            <div className="dialogue-bubble answer">
              <span className="highlight">{departement.adminRegion}</span>, pardi !
            </div>
          )}
        </div>

        <button onClick={handleClick} id="my-button">
          {activNumber === 3 ? "Nouveau tirage" : "Solution"}
        </button>
      </div>
    </main>
  );
}
