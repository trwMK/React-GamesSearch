import { useEffect, useState } from "react";

export default function GamesDetails({
  gameDetail,
  setGamesDetails,
  redditId
}) {
  const [redditPosts, setRedditPosts] = useState(null);

  console.log(redditPosts);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${redditId}/reddit?key=1378f68ff8464e4b961ee1892c52cfde`
        );

        if (!res.ok) throw new Error("Could not find any data");

        const data = await res.json();
        console.log(data.results);
        console.log(redditId);
        setRedditPosts(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [redditId]);

  function handleCloseDetails() {
    setGamesDetails(false);
  }

  return (
    <div>
      <h3>Details | {gameDetail.name}</h3>
      <div className="gridCon">
        <div className="headerDetails">
          <h2>{gameDetail.name}</h2>
          <button className="btnWishlist" onClick={handleCloseDetails}>
            Close
          </button>
        </div>
        {gameDetail.background_image !== null && (
          <img src={gameDetail.background_image} alt={gameDetail.name} />
        )}
        <div className="imgGallerie">
          {gameDetail.short_screenshots.map((img, i) => {
            return (
              i !== 0 &&
              i <= 4 && (
                <img
                  src={img.image}
                  className="imgScreenshot"
                  alt={img.id}
                  key={img.id}
                />
              )
            );
          })}
        </div>

        <div className="gameCon">
          <p>
            <span className="headerGame">Score:</span>{" "}
            {Math.floor(gameDetail.score)}
          </p>
          <p>
            <span className="headerGame">Released:</span>{" "}
            {gameDetail.released === null
              ? "no release date"
              : gameDetail.released.slice(0, 4)}
          </p>
          <p>
            <span className="headerGame">Genre:</span>
            {gameDetail.genres.length > 0
              ? gameDetail.genres.map((genre, i) => `${genre.name} `)
              : "no genre"}
          </p>
          <p>
            <span className="headerGame">Rating:</span> {gameDetail.rating}
          </p>
          <p>
            <span className="headerGame">Top rating:</span>{" "}
            {gameDetail.rating_top}
          </p>
          <p>
            <span className="headerGame">ratings:</span>{" "}
            {gameDetail.ratings_count}
          </p>
          <p>
            <span className="headerGame">Playtime:</span> {gameDetail.playtime}
          </p>
          <p>
            <span className="headerGame">suggestions:</span>{" "}
            {gameDetail.suggestions_count}
          </p>
          <p>
            <span className="headerGame">reviews:</span>{" "}
            {gameDetail.reviews_count}
          </p>
        </div>
        <p>Platforms</p>
        <div className="platforms">
          {gameDetail.platforms.map((platform) => {
            return <p key={platform.platform.id}>{platform.platform.name}</p>;
          })}
        </div>
        <div>
          {redditPosts?.map((post) => (
            <div key={post.id}>
              <div className="postHeader">
                <p>{post.id}</p>
                <p>{post.name}</p>
              </div>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
