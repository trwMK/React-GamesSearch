export default function Games({
  game,
  favoriteGames,
  onAddFavorite,
  setGameDetail,
  setGamesDetails,
  gameDetail,
  setRedditId
}) {
  function handleDetailGame(g) {
    if (gameDetail === null || gameDetail !== g) {
      setGameDetail(g);
      setGamesDetails(true);
      setRedditId(g.id);
      console.log(g.id);
    }
    if (gameDetail === g) {
      setGameDetail(null);
      setGamesDetails(false);
    }
  }

  function handleWishlist(game) {
    if (favoriteGames.includes(game)) return;
    onAddFavorite(game);
    setGamesDetails(false);
  }

  return (
    <li className="gridCon">
      <div className="gameHeader">
        <div className="headerFlex">
          <h2>{game.name}</h2>
          <button
            onClick={() => handleDetailGame(game)}
            className="btnWishlist"
          >
            Details
          </button>

          <button className="btnWishlist" onClick={() => handleWishlist(game)}>
            <span role="img" aria-label="Heart emoji">
              ❤️
            </span>
          </button>
        </div>
        {game.background_image !== null && (
          <img src={game.background_image} alt={game.name} />
        )}
      </div>
      <div className="gameCon">
        <p>
          <span className="headerGame">Score:</span> {Math.floor(game.score)}
        </p>
        <p>
          <span className="headerGame">Released:</span>{" "}
          {game.released === null
            ? "no release date"
            : game.released.slice(0, 4)}
        </p>
        <p>
          <span className="headerGame">Genre:</span>
          {game.genres.length > 0
            ? game.genres.map((genre, i) => `${genre.name} `)
            : "no genre"}
        </p>
        <p>
          <span className="headerGame">Rating:</span> {game.rating}
        </p>
        <p>
          <span className="headerGame">Top rating:</span> {game.rating_top}
        </p>
        <p>
          <span className="headerGame">ratings:</span> {game.ratings_count}
        </p>
      </div>
      <div></div>
    </li>
  );
}
