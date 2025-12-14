import React, { useEffect, useRef, useState } from 'react';
import './box.css'; 

const wordList = [
  'react', 'javascript', 'speed', 'code', 'debug', 'frontend', 'keyboard',
  'performance', 'developer', 'logic', 'project', 'async', 'state', 'props',
  'node', 'html', 'css', 'design', 'build', 'challenge'
];

function TypingGame() {
  const [currentWord, setCurrentWord] = useState('');
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)]);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();

    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
      const newRecord = {
        id: Date.now(),
        score,
        accuracy,
        timestamp: new Date().toLocaleTimeString()
      };

      setHistory((prev) => {
        const updated = [...prev, newRecord];

        const unique = updated.filter(
          (item, index, self) =>
            index === self.findIndex(
              (t) =>
                t.score === item.score &&
                t.accuracy === item.accuracy &&
                t.timestamp === item.timestamp
            )
        );

        return unique.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy);
      });

      setGameOver(true);
    }
  }, [timeLeft, gameOver, score, total]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() === currentWord) {
      setScore((prev) => prev + 1);
      setTotal((prev) => prev + 1);
      setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)]);
      setInput('');
    } else if (e.target.value.endsWith(' ')) {
      setTotal((prev) => prev + 1);
      setInput('');
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTotal(0);
    setTimeLeft(10);
    setGameOver(false);
    setInput('');
    setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)]);
  };

  const highScore = history.length ? history[0].score : 0;

  return (
    <div className="game-container">
      <h2 className="heading">⚡ Typing Speed Test</h2>

      {!gameOver ? (
        <>
          <div className="word-display">{currentWord}</div>
          <input
            ref={inputRef}
            className="input-box"
            value={input}
            onChange={handleInputChange}
            disabled={gameOver}
          />
          <div className="timer">⏳ {timeLeft}s</div>
        </>
      ) : (
        <>
          <h3 className="result">✅ Score: {score}</h3>
          <h3 className="result">🎯 Accuracy: {total > 0 ? Math.round((score / total) * 100) : 0}%</h3>
          <button className="restart-btn" onClick={handleRestart}>
            🔄 Try Again
          </button>
        </>
      )}

      <div className="leaderboard">
        <h3>🏆 Leaderboard</h3>
        {history.length === 0 ? (
          <p>No records yet.</p>
        ) : (
          <ol>
            {history.map((record, idx) => (
              <li
                key={record.id}
                className={record.score === highScore ? 'highlight' : ''}
              >
                #{idx + 1} | Score: {record.score} | 🎯 {record.accuracy}% | 🕒 {record.timestamp}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default TypingGame;
