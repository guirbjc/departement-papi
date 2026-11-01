import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import departementsData from "../Data";
import Header from "../components/Header";
import DepCard from "../components/DepCard";
import DepVerso from "../components/DepVerso";
import useIsMobile from "../useIsMobile";
import { getDisplayNumber } from "../utils";
import "../components/DepPage.css";

export default function DepPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { number } = useParams();
  const isMobile = useIsMobile();
  const [flippedNumber, setFlippedNumber] = useState(null);

  // Mobile : cette page intermédiaire n'existe pas, retour à la liste
  useEffect(() => {
    if (isMobile) navigate("/Dep" + location.search, { replace: true });
  }, [isMobile, navigate, location.search]);

  if (isMobile) return null;

  const departement = departementsData.find((dep) => dep.number.toString() === number);
  const currentIndex = departementsData.findIndex((dep) => dep.number.toString() === number);
  const previousDepartement = departementsData[currentIndex - 1] || null;
  const nextDepartement = departementsData[currentIndex + 1] || null;

  if (!departement) {
    return <h2>Erreur : département non trouvé</h2>;
  }

  const displayNumber = getDisplayNumber(departement);

  // La carte repart côté recto quand on change de département
  const flipped = flippedNumber === number;
  const toggle = () => setFlippedNumber(flipped ? null : number);

  const renderDepCard = (dep) => {
    return dep ? <DepCard key={dep.number} departement={dep} /> : null;
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("departement-page-container")) {
      navigate("/Dep" + location.search);
    }
  };

  return (
    <main>
      <Header />
      <div className="departement-page-container" onClick={handleBackgroundClick}>
        {renderDepCard(previousDepartement)}

        <div
          className={`departement-page-flip ${flipped ? "is-flipped" : ""}`}
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
            <div className="flip-face flip-front">
              <div className="departement-page">
                <h1>
                  {displayNumber} · {departement.name}
                </h1>
                <img
                  className="departement-page-picture"
                  src={`${import.meta.env.BASE_URL}${departement.number}${departement.alias}.jpg`}
                  alt={departement.name}
                />
                <div className="departement-page-description">
                  <p className="dep-page-description-line">
                    Chef-lieu : <span className="highlight-capital">{departement.capital}</span>
                  </p>
                  <p className="dep-page-description-line">
                    Région : <span className="highlight-region">{departement.adminRegion}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-face flip-back">
              <div className="departement-page departement-page-back">
                <DepVerso departement={departement} />
              </div>
            </div>
          </div>
        </div>

        {renderDepCard(nextDepartement)}
      </div>
    </main>
  );
}
