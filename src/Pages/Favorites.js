import { useContext } from "react";
import FavoritesContext from "../Store/favorites-context";
import MeetupList from "../Components/Meetups/MeetupList";
export default function FavoritesPage() {
  const favoritesctx = useContext(FavoritesContext);

  let content;

  if (favoritesctx.totalFavorites === 0) {
    content = <p>You got no favorites yet, start adding</p>;
  } else {
    content = <MeetupList meetups={favoritesctx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
