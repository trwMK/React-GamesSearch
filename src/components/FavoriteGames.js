export default function FavoriteGames({ favoriteGame, onDeleteItem }) {
  return (
    <li className="gridCon">
      <div className="gameHeader">
        <div className="headerFlex">
          <h2>{favoriteGame.name}</h2>
          <button
            className="btnWishlist"
            onClick={() => onDeleteItem(favoriteGame.id)}
          >
            Remove
          </button>
        </div>
      </div>
      {favoriteGame.background_image !== null && (
        <img src={favoriteGame.background_image} alt={favoriteGame.name} />
      )}
      <div className="gameCon">
        <p>
          <span className="headerGame">Score:</span>{" "}
          {Math.floor(favoriteGame.score)}
        </p>
        <p>
          <span className="headerGame">Released:</span>{" "}
          {favoriteGame.released === null
            ? "no release date"
            : favoriteGame.released.slice(0, 4)}
        </p>
        <p>
          <span className="headerGame">Genre:</span>
          {favoriteGame.genres.length > 0
            ? favoriteGame.genres.map((genre, i) => `${genre.name} `)
            : "no genre"}
        </p>
        <p>
          <span className="headerGame">Rating:</span> {favoriteGame.rating}
        </p>
        <p>
          <span className="headerGame">Top rating:</span>{" "}
          {favoriteGame.rating_top}
        </p>
        <p>
          <span className="headerGame">ratings:</span>{" "}
          {favoriteGame.ratings_count}
        </p>
      </div>
    </li>
  );
}
