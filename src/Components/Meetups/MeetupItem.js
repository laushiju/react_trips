import { useContext } from "react";
import Card from "../ui/Card";
import mi from "./MeetupItem.module.css";
import FavoritesContext from "../../Store/favorites-context";
export default function MeetupItem({
  id,
  image,
  alt,
  title,
  address,
  description,
}) {
  const favoritesctx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesctx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesctx.removeFavorite(id);
    } else {
      favoritesctx.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  }
  return (
    <li className={mi.item}>
      <Card>
        <div className={mi.image}>
          <img src={image} alt={alt} />
        </div>
        <div className={mi.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={mi.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
