import { Link } from "react-router-dom";
import mainnav from "./Mainnavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../Store/favorites-context";
export default function MainNavigation() {
  const favoritesctx = useContext(FavoritesContext);
  return (
    <header className={mainnav.header}>
      <div className={mainnav.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetups">NewMeetUps</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites
            <span className={mainnav.badge}>{favoritesctx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
      MainNavigation
    </header>
  );
}
