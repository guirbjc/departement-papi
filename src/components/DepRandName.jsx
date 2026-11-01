import { useState, useRef } from 'react';
import "./DepRandName.css";

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', '0', 'B'];

export default function InvertedGame({ data }) {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * data.length));
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const containerRef = useRef(null);

  const departement = data[randomNumber];

  const getCorrectCode = (number) => {
    if (number === 20.1) return '2A';
    if (number === 20.2) return '2B';
    return number.toString();
  };

  const displayedAnswer = getCorrectCode(departement.number);
  const maxLength = displayedAnswer.length;   // 2 ou 3 selon le département

  const handleInputChange = (e) => {
    setUserInput(e.target.value.toUpperCase().slice(0, maxLength));
  };

  // Clavier intégré : ajoute une touche (limite selon le département)
  const handleKey = (key) => {
    setUserInput((prev) => (prev + key).slice(0, maxLength));
  };

  const handleBackspace = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  // Mobile : cale la div globale en haut de l'écran
  const scrollToTop = () => {
    if (window.matchMedia("(max-width: 768px), (pointer: coarse)").matches) {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCheck = () => {
    const cleanedInput = userInput.trim().toUpperCase();

    setIsCorrect(cleanedInput === displayedAnswer);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setRandomNumber(Math.floor(Math.random() * data.length));
    setUserInput('');
    setIsCorrect(null);
    setShowAnswer(false);
  };

  return (
    <main>
      <div id="invertedGame-container" ref={containerRef}>
        <h1 className="h2-random">Devine le numéro du département</h1>

        <div className="quiz-card">
          <div className="quiz-question">
            <span className="highlight">{departement.name}</span>, quel est son numéro ?
          </div>

          <div className="input-zone-name">
            <input
              type="text"
              inputMode="none"
              autoComplete="off"
              placeholder="_ _"
              value={userInput}
              onChange={handleInputChange}
              onFocus={scrollToTop}
              onClick={scrollToTop}
              disabled={showAnswer}
            />

            {showAnswer && (
              <div className={`quiz-answer ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? (
                  <>✅ Bravo ! C’est bien le département <strong>{displayedAnswer}</strong>.</>
                ) : (
                  <>❌ Eh non… c’était le <strong>{displayedAnswer}</strong>.</>
                )}
              </div>
            )}

            <div className="num-keypad">
              {KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`keypad-key ${key === 'A' || key === 'B' ? 'keypad-letter' : ''}`}
                  onClick={() => handleKey(key)}
                  disabled={showAnswer}
                >
                  {key}
                </button>
              ))}
              <button
                type="button"
                className="keypad-key keypad-back"
                onClick={handleBackspace}
                aria-label="Effacer"
                disabled={showAnswer}
              >
                ⌫
              </button>
            </div>

            {!showAnswer ? (
              <button onClick={handleCheck}>Valider</button>
            ) : (
              <button onClick={handleNext}>Nouveau tirage</button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
