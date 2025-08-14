import { useState } from 'react';
import quotes from './quotes.json';
import badge from './assets/android-chrome-192x192.png'; 
import './App.css';

export default function SBPDQuotes() {
  const [quote, setQuote] = useState(null);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div className="sbpd-container">
      <header>
        <img src={badge} alt="pineapple-emoji" className="badge" />
        <h1>Santa Barbara Police Department</h1>
        <h2>Random Quote Generator</h2>
      </header>

      <div className="case-file">
        <p className="label">Case ID:</p>
        <p className="value">
          {quote ? `SBPD-${Math.floor(Math.random() * 9999)}` : "----"}
        </p>

        <p className="label">Quote:</p>
        <p className="value quote-text">
          {quote ? `"${quote.quote}"` : "Tap the pineapple!"}
        </p>

        <p className="label">Character:</p>
        <p className="value">{quote ? quote.character : "----"}</p>

        <p className="source" style={{ textAlign: 'right', fontSize: '0.8rem' }}>
          {quote && quote.sourceUrl && (
            <a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )}
        </p>

        <p className="label">Season/Episode:</p>
        <p className="value">{quote ? quote.season_episode : "----"}</p>
      </div>

      <button onClick={getRandomQuote} className="psych-button">
        🍍
      </button>
    </div>
  );
}
