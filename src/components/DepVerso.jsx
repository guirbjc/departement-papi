import "./Flip.css";
import depInfo from "../DepInfo";
import { getDisplayNumber } from "../utils";

export default function DepVerso({ departement }) {
  const info = depInfo[departement.number];

  return (
    <div className="verso-content">
      <h3 className="verso-title">
        {getDisplayNumber(departement)} · {departement.name}
      </h3>

      <p className="verso-subline">
        <span className="verso-capital">{departement.capital}</span>
        {" · "}
        <span className="verso-region">{departement.adminRegion}</span>
      </p>

      <p className="verso-text">{info?.description ?? "Description à venir."}</p>

      {info?.tourismUrl && (
        <a
          className="verso-link"
          href={info.tourismUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {new URL(info.tourismUrl).hostname.replace(/^www\./, "")}
        </a>
      )}
    </div>
  );
}
