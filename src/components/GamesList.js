import Games from "./Games";

export default function GamesList({
  games,
  favoriteGames,
  setGameDetail,
  setGamesDetails,
  gameDetail,
  onAddFavorite,
  setRedditId
}) {
  return (
    <div>
      {games.length === 0 ? (
        <h3>Search for your favorite game</h3>
      ) : (
        <h3>Search result</h3>
      )}
      <ul>
        {games.map((game) => (
          <Games
            onAddFavorite={onAddFavorite}
            game={game}
            favoriteGames={favoriteGames}
            setGamesDetails={setGamesDetails}
            setGameDetail={setGameDetail}
            gameDetail={gameDetail}
            key={game.id}
            setRedditId={setRedditId}
          />
        ))}
      </ul>
    </div>
  );
}
