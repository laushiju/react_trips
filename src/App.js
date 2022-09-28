import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./Pages/AllMeetUps";
import NewMeetUpPage from "./Pages/NewMeetUp";
import FavoritesPage from "./Pages/Favorites";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<AllMeetUpsPage />} />
        <Route path="/new-meetups" exact={true} element={<NewMeetUpPage />} />
        <Route path="/favorites" exact={true} element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
