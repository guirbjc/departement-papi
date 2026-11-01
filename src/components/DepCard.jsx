import React, { useState } from "react";
import "./DepCard.css";
import { Link } from "react-router-dom";
import DepVerso from "./DepVerso";
import useIsMobile from "../useIsMobile";
import { getDisplayNumber } from "../utils";

export default function DepCard({ departement }) {
  const isMobile = useIsMobile();
  const [flipped, setFlipped] = useState(false);
  const displayNumber = getDisplayNumber(departement);

  const front = (
    <>
      <img
        className="departement-picture"
        src={`${import.meta.env.BASE_URL}${departement.number}${departement.alias}.jpg`}
        alt={departement.name}
      />
      <div className="departement-description">
        <h3>
          {displayNumber} · {departement.name}
        </h3>
        <p className="dep-description-line">
          Chef-lieu : <span className="highlight-capital">{departement.capital}</span>
        </p>
        <p className="dep-description-line">
          Région : <span className="highlight-region">{departement.adminRegion}</span>
        </p>
      </div>
    </>
  );

  // PC : comportement habituel, lien vers la page à 3 cartes
  if (!isMobile) {
    return (
      <Link to={`/departement/${departement.number}`} className="departement-card">
        {front}
      </Link>
    );
  }

  // Mobile : la carte se retourne sur place
  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`departement-card flip-card ${flipped ? "is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">{front}</div>
        <div className="flip-face flip-back">
          <DepVerso departement={departement} />
        </div>
      </div>
    </div>
  );
}
