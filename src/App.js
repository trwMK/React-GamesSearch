import "./styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import GamesList from "./components/GamesList";
import FavoriteGamesList from "./components/FavoriteGamesList";
import Footer from "./components/Footer";
import GamesDetails from "./components/GamesDetails";
import { useLocalStorageState } from "./useLocaleStorageState";
import { REACT_APP_API_KEY } from "../config";

export default function App() {
  // States
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [favoriteGames, setFavoriteGames] = useLocalStorageState(
    [],
    "favorite"
  );
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gamesDetails, setGamesDetails] = useState(false);
  const [gameDetail, setGameDetail] = useState(null);
  const [redditId, setRedditId] = useState(null);

  //// Use Effects
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&search=${query}`
        );

        if (!res.ok) throw new Error("Could not find any data");

        const data = await res.json();
        if (data.results.length === 0) {
          throw new Error("No results found");
        }
        console.log(data.results);
        setGames(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  //Handler functions
  function handleQuery(e) {
    e.preventDefault();
  }
  function handleDeleteItem(id) {
    setFavoriteGames(favoriteGames.filter((item) => item.id !== id));
  }

  function handleAddFavorite(game) {
    setFavoriteGames((favoriteGames) => [...favoriteGames, game]);
  }

  return (
    <div className="wrapper">
      <Header
        onQuery={handleQuery}
        setQuery={setQuery}
        query={query}
        setGamesDetails={setGamesDetails}
      />
      <div className="App">
        <h1>Welcome to Games Magic</h1>

        {error && <h2>Could not fetch your data</h2>}
        <div className="main">
          {isLoading && !error && <p>Loading....</p>}
          {!isLoading && !error && (
            <>
              <GamesList
                games={games}
                setFavoriteGames={setFavoriteGames}
                favoriteGames={favoriteGames}
                setGameDetail={setGameDetail}
                setGamesDetails={setGamesDetails}
                gameDetail={gameDetail}
                gamesDetails={gamesDetails}
                onAddFavorite={handleAddFavorite}
                setRedditId={setRedditId}
              />
            </>
          )}
          {gamesDetails ? (
            <GamesDetails
              setGamesDetails={setGamesDetails}
              gameDetail={gameDetail}
              favoriteGames={favoriteGames}
              redditId={redditId}
            />
          ) : (
            <FavoriteGamesList
              favoriteGames={favoriteGames}
              onDeleteItem={handleDeleteItem}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
