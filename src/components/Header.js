import { useRef, useEffect } from "react";

export default function Header({ query, setQuery, onQuery, setGamesDetails }) {
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <div className="header">
      <p>
        Searching
        <span role="img" aria-label="Game emoji">
          🎮
        </span>
      </p>
      <form onSubmit={onQuery}>
        <input
          className="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for game"
          ref={inputEl}
        />
      </form>
      <button className="btnWishlist" onClick={() => setGamesDetails(false)}>
        <span role="img" aria-label="Heart emoji">
          ❤️
        </span>
        Games
      </button>
    </div>
  );
}
