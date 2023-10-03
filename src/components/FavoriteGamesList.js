import FavoriteGames from "./FavoriteGames";

export default function FavoriteGamesList({ favoriteGames, onDeleteItem }) {
  return (
    <div>
      {favoriteGames.length === 0 ? (
        <h3>No favorite Games</h3>
      ) : (
        <h3>Your favorite games</h3>
      )}
      <ul>
        {favoriteGames.map((favoriteGame) => (
          <FavoriteGames
            favoriteGame={favoriteGame}
            key={favoriteGame.id}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
